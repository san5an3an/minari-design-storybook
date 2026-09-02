import * as React from "react";
import { cx } from "../cx";
import type { RingcarouselProps } from "../../systems/props";

const MAX_PLANES = 16;

// 전체화면 쿼드 하나. 정점이 클립공간 좌표 그대로라 카메라 수학이 필요 없음
const VERT = `#version 300 es
in vec2 aPos;
out vec2 vUv;
void main { vUv = aPos * 0.5 + 0.5; gl_Position = vec4(aPos, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
in vec2 vUv;
out vec4 outColor;

uniform vec2  uResolution;
uniform float uCount;
uniform vec2  uPos[${MAX_PLANES}]; // 카드 중심 좌표(px)
uniform float uRot[${MAX_PLANES}]; // 라디안 단위 회전값
uniform float uNear[${MAX_PLANES}]; // 0..1, 앞쪽에 가까운 정도
uniform vec2  uSize; // 카드 반쪽 크기(px)
uniform float uRadius; // 모서리 반경 (px)
uniform float uK; // 점성, smin의 k값. 이 값이 특성을 결정
uniform float uWobble;
uniform float uTime;
uniform vec3  uPlane;
uniform vec3  uPage;
uniform vec3  uDim;
uniform vec3  uSheen;
uniform vec2  uMouse; // px 단위, 원점은 화면 중앙
uniform float uMousePresence;

// 둥근 사각형 모서리까지 거리
float sdRoundBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - r;
}

// 부드러운 최소값 계산에 iq 다항식 사용. k=0이면 min과 같아 카드 겹치는 문제 있음
float smin(float a, float b, float k) {
  if (k <= 0.0001) return min(a, b);
  float h = clamp(0.5 + 0.5 * (b - a) / k, 0.0, 1.0);
  return mix(b, a, h) - k * h * (1.0 - h);
}

void main {
  vec2 p = (vUv - 0.5) * uResolution;

  // 커서는 그리지 않고 아래 표면만 무르게 처리. 가까울수록 k값을 키워 이웃 카드 엉김 유도
  float mDist = length(p - uMouse);
  float melt = uMousePresence * exp(-mDist / max(uResolution.y * 0.35, 1.0));
  float k = uK * (1.0 + melt * 1.6);

  float d = 1e9;
  float lit = 0.0; // 가장 가까운 카드의 near 값, 가까울수록 밝게 표시
  float best = 1e9;

  for (int i = 0; i < ${MAX_PLANES}; i++) {
    if (float(i) >= uCount) break;
    vec2 q = p - uPos[i];
    float c = cos(uRot[i]), s = sin(uRot[i]);
    q = mat2(c, -s, s, c) * q;
    float di = sdRoundBox(q, uSize, uRadius);
    if (di < best) { best = di; lit = uNear[i]; }
    d = smin(d, di, k);
  }

  // 표면장력 보정 적용. 없으면 선이 직선처럼 보임
  d += sin(p.x * 0.05 + uTime) * cos(p.y * 0.05 - uTime * 0.7) * uWobble;

  float aa = fwidth(d) + 0.0001;
  float alpha = 1.0 - smoothstep(-aa, aa, d);

  // 앞선 요소는 plane 색, 물러난 요소는 dim 색
  vec3 body = mix(uDim, uPlane, lit);

  // 기울기 최대 지점 하이라이트 배치
  float rim = 1.0 - smoothstep(0.0, uRadius * 1.5, abs(d));
  body = mix(body, uSheen, rim * 0.18 * lit);

  outColor = vec4(mix(uPage, body, alpha), 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, src: string) {
  const sh = gl.createShader(type)!;
  gl.shaderSource(sh, src);
  gl.compileShader(sh);
  if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) {
    // 조용히 실패 시 화면만 비어 원인을 알 수 없음
    const log = gl.getShaderInfoLog(sh);
    gl.deleteShader(sh);
    throw new Error(`ringcarousel 셰이더 컴파일 실패: ${log}`);
  }
  return sh;
}

function toRGB(v: string): [number, number, number] | null {
  const s = v.trim;
  const hex = s.match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const n = parseInt(hex[1], 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
  }
  const nums = s.match(/[\d.]+/g);
  if (nums && nums.length >= 3) {
    return [+nums[0] / 255, +nums[1] / 255, +nums[2] / 255];
  }
  return null;
}

export function Ringcarousel({
  items, className, ...rest
}: RingcarouselProps) {
  const hostRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const [front, setFront] = React.useState(0);
  const [failed, setFailed] = React.useState(false);

  // 모션 감소 설정 시 링 대신 목록 표시. 정지하면 남는 콘텐츠가 없음
  const reduced = React.useSyncExternalStore(
    (cb) => {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      m.addEventListener("change", cb);
      return  => m.removeEventListener("change", cb);
    },
     => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
     => true, // 서버에서는 안전한 기본값으로 목록 반환
  );

  const count = Math.min(items.length, MAX_PLANES);

  React.useEffect( => {
    if (reduced || failed || count === 0) return;
    const host = hostRef.current, canvas = canvasRef.current;
    if (!host || !canvas) return;

    const gl = canvas.getContext("webgl2", { antialias: false, alpha: false });
    if (!gl) { setFailed(true); return; }

    let prog: WebGLProgram;
    let vs: WebGLShader | null = null, fs: WebGLShader | null = null;
    try {
      prog = gl.createProgram!;
      vs = compile(gl, gl.VERTEX_SHADER, VERT);
      fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
      gl.attachShader(prog, vs);
      gl.attachShader(prog, fs);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(prog) || "link 실패");
      }
    } catch (e) {
      console.error(e);
      setFailed(true);
      return;
    } finally {
      if (vs) gl.deleteShader(vs);
      if (fs) gl.deleteShader(fs);
    }
    gl.useProgram(prog);

    const buf = gl.createBuffer;
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "aPos");
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const U = (n: string) => gl.getUniformLocation(prog, n);
    const u = {
      res: U("uResolution"), count: U("uCount"), pos: U("uPos"), rot: U("uRot"),
      near: U("uNear"), size: U("uSize"), radius: U("uRadius"), k: U("uK"),
      wobble: U("uWobble"), time: U("uTime"), plane: U("uPlane"), page: U("uPage"),
      dim: U("uDim"), sheen: U("uSheen"), mouse: U("uMouse"), presence: U("uMousePresence"),
    };

    let colorsRead = false;
    let tok = {
      plane: [0, 0, 0] as [number, number, number],
      page: [1, 1, 1] as [number, number, number],
      dim: [0, 0, 0] as [number, number, number],
      sheen: [1, 1, 1] as [number, number, number],
      planeSize: 90, radius: 12, k: 14, wobble: 1, ring: 340,
    };
    const readTokens =  => {
      const cs = getComputedStyle(host);
      const px = (name: string, fallback: number) => {
        const v = parseFloat(cs.getPropertyValue(name));
        // rem은 계산된 px 값으로 옴. NaN이면 토큰이 없는 것임
        return Number.isFinite(v) ? v : fallback;
      };
      const rem = parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const remOf = (name: string, fb: number) => {
        const raw = cs.getPropertyValue(name).trim;
        if (raw.endsWith("rem")) return parseFloat(raw) * rem;
        return px(name, fb);
      };
      // 치수처럼 px, remOf 형태로 이름과 기본값 함께 지정
      let ok = true;
      const rgb = (name: string, fb: [number, number, number]) => {
        const c = toRGB(cs.getPropertyValue(name));
        if (!c) { ok = false; return fb; }
        return c;
      };
      tok = {
        plane: rgb("--component-ringcarousel-plane", [0, 0, 0]),
        page: rgb("--component-ringcarousel-page", [1, 1, 1]),
        dim: rgb("--component-ringcarousel-dim", [0, 0, 0]),
        sheen: rgb("--component-ringcarousel-sheen", [1, 1, 1]),
        planeSize: remOf("--component-ringcarousel-plane-size", 90),
        radius: remOf("--component-ringcarousel-plane-radius", 12),
        k: remOf("--component-ringcarousel-viscosity", 14),
        wobble: remOf("--component-ringcarousel-wobble", 1),
        ring: remOf("--component-ringcarousel-ring-radius", 340),
      };
      if (ok) colorsRead = true;
    };
    let pending = 0;
    const scheduleRead =  => {
      if (pending) return;
      pending = requestAnimationFrame( => { pending = 0; readTokens; });
    };
    // data-theme 전환과 색상 시스템 교체 양쪽에서 색상 변경
    const themeObs = new MutationObserver(scheduleRead);
    themeObs.observe(document.documentElement, {
      attributes: true, attributeFilter: ["data-theme", "class", "style"],
    });
    const styleObs = new MutationObserver(scheduleRead);
    styleObs.observe(document.head, { childList: true, subtree: true, characterData: true });
    // 첫 프레임에서 크기 다시 읽기
    scheduleRead;

    const nag = window.setTimeout( => {
      if (!colorsRead) {
        console.warn(
          "ringcarousel: 색 토큰(--component-ringcarousel-*)을 끝내 못 읽어 기본색으로 그리고 있음. " +
          "이 컴포넌트는 색을 CSS 에서 읽는 것이 존재 조건이라, 지금 화면의 색은 이 시스템 색이 아님.",
        );
      }
    }, 2000);

    let dpr = 1, W = 0, H = 0;
    const resize =  => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = host.getBoundingClientRect;
      W = Math.max(1, Math.round(r.width)); H = Math.max(1, Math.round(r.height));
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize;
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    let angle = 0, vel = 0, dragging = false, lastX = 0;
    const step = (Math.PI * 2) / count;
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return; // 세로 크기, 전체를 페이지 수로 나눈 값
      e.preventDefault;
      vel += e.deltaX * 0.00025;
    };
    const onDown = (e: PointerEvent) => {
      dragging = true; lastX = e.clientX; canvas.setPointerCapture(e.pointerId);
    };
    const onUp =  => { dragging = false; };
    let mx = 0, my = 0, presence = 0;
    const onMove = (e: PointerEvent) => {
      const r = host.getBoundingClientRect;
      mx = e.clientX - r.left - W / 2;
      my = -(e.clientY - r.top - H / 2);
      presence = 1;
      if (dragging) { vel += (e.clientX - lastX) * 0.00035; lastX = e.clientX; }
    };
    const onLeave =  => { presence = 0; };
    canvas.addEventListener("wheel", onWheel, { passive: false });
    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointerup", onUp);
    canvas.addEventListener("pointermove", onMove);
    canvas.addEventListener("pointerleave", onLeave);

    const pos = new Float32Array(MAX_PLANES * 2);
    const rot = new Float32Array(MAX_PLANES);
    const near = new Float32Array(MAX_PLANES);
    let raf = 0;
    const t0 = performance.now;
    let lastFront = -1;

    const frame =  => {
      const t = (performance.now - t0) / 1000;
      if (!dragging) {
        // 가장 가까운 셀로 당기는 힘과 감쇠 함께 적용
        const target = Math.round(angle / step) * step;
        vel += (target - angle) * 0.008;
      }
      vel *= 0.92;
      angle += vel;

      const ring = H * 0.52 * (tok.ring / 340);
      const half = H * 0.075 * (tok.planeSize / 90);
      const fit = half / (tok.planeSize * 0.5); // 점성, 모서리에 적용할 배율

      const cx0 = 0, cy0 = -ring;
      for (let i = 0; i < count; i++) {
        const a = angle + i * step;
        pos[i * 2] = cx0 + Math.cos(a) * ring;
        pos[i * 2 + 1] = cy0 + Math.sin(a) * ring;
        rot[i] = a - Math.PI / 2;
        // 정면에 가까운 3시 방향일수록 1, 밝기, 라벨 함께 지정
        near[i] = Math.pow(Math.max(0, Math.cos(a)), 6);
      }

      let bi = 0;
      for (let i = 1; i < count; i++) if (near[i] > near[bi]) bi = i;
      if (bi !== lastFront) { lastFront = bi; setFront(bi); }

      gl.uniform2f(u.res, W, H);
      gl.uniform1f(u.count, count);
      gl.uniform2fv(u.pos, pos);
      gl.uniform1fv(u.rot, rot);
      gl.uniform1fv(u.near, near);
      // 카드, 모서리, 점성 동일 배율 적용
      gl.uniform2f(u.size, half, half / 1.5);
      gl.uniform1f(u.radius, Math.min(tok.radius * fit, half * 0.9));
      gl.uniform1f(u.k, tok.k * fit);
      gl.uniform1f(u.wobble, tok.wobble * fit);
      gl.uniform1f(u.time, t);
      gl.uniform3fv(u.plane, tok.plane);
      gl.uniform3fv(u.page, tok.page);
      gl.uniform3fv(u.dim, tok.dim);
      gl.uniform3fv(u.sheen, tok.sheen);
      gl.uniform2f(u.mouse, mx, my);
      gl.uniform1f(u.presence, presence);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      raf = requestAnimationFrame(frame);
    };
    raf = requestAnimationFrame(frame);

    return  => {
      cancelAnimationFrame(raf);
      if (pending) cancelAnimationFrame(pending);
      clearTimeout(nag);
      themeObs.disconnect;
      styleObs.disconnect;
      ro.disconnect;
      canvas.removeEventListener("wheel", onWheel);
      canvas.removeEventListener("pointerdown", onDown);
      canvas.removeEventListener("pointerup", onUp);
      canvas.removeEventListener("pointermove", onMove);
      canvas.removeEventListener("pointerleave", onLeave);
      gl.deleteProgram(prog);
      gl.deleteBuffer(buf);
    };
  }, [count, reduced, failed]);

  const standin = reduced || failed;

  return (
    <div ref={hostRef} className={cx("ods-ringcarousel", className)} {...rest}>
      {!standin && <canvas ref={canvasRef} />}
      {standin ? (
        // 장식이 아닌 대체 텍스트. 이미지뿐인 링이라 없으면 스크린리더에 화면이 비어 보임
        <div className="ods-ringcarousel-fallback">
          {items.map((it) => <span key={it.id}>{it.label}</span>)}
        </div>
      ) : (
        <>
          <span className="ods-ringcarousel-index">
            {String(front + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
          <span className="ods-ringcarousel-label">{items[front]?.label}</span>
        </>
      )}
    </div>
  );
}
