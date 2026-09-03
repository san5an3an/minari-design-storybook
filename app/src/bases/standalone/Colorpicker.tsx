import * as React from "react";
import { ChevronDown, Pipette, Plus, X } from "lucide-react";

import type { ColorPickerProps, ColorPickerSwatch } from "../../systems/props";

const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

type Rgb = { r: number; g: number; b: number };

function hsvToRgb(h: number, s: number, v: number): Rgb {
  s /= 100;
  v /= 100;
  const c = v * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = v - c;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

function rgbToHsv(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  const d = max - min;
  let h = 0;
  if (d !== 0) {
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: max === 0 ? 0 : (d / max) * 100, v: max * 100 };
}

function rgbToHex(r: number, g: number, b: number) {
  const to = (n: number) => clamp(Math.round(n), 0, 255).toString(16).padStart(2, "0");
  return (to(r) + to(g) + to(b)).toUpperCase;
}

function hexToRgb(hex: string): Rgb | null {
  const s = hex.replace("#", "");
  if (!/^[0-9a-fA-F]{6}$/.test(s)) return null;
  const n = parseInt(s, 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255; g /= 255; b /= 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h = 0, s = 0;
  const l = (max + min) / 2;
  const d = max - min;
  if (d !== 0) {
    s = d / (1 - Math.abs(2 * l - 1));
    if (max === r) h = ((g - b) / d) % 6;
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h *= 60;
    if (h < 0) h += 360;
  }
  return { h, s: s * 100, l: l * 100 };
}

function hslToRgb(h: number, s: number, l: number): Rgb {
  s /= 100; l /= 100;
  const c = (1 - Math.abs(2 * l - 1)) * s;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = l - c / 2;
  let r = 0, g = 0, b = 0;
  if (h < 60) [r, g, b] = [c, x, 0];
  else if (h < 120) [r, g, b] = [x, c, 0];
  else if (h < 180) [r, g, b] = [0, c, x];
  else if (h < 240) [r, g, b] = [0, x, c];
  else if (h < 300) [r, g, b] = [x, 0, c];
  else [r, g, b] = [c, 0, x];
  return {
    r: Math.round((r + m) * 255),
    g: Math.round((g + m) * 255),
    b: Math.round((b + m) * 255),
  };
}

const srgbToLinear = (c: number) => {
  c /= 255;
  return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
};
const linearToSrgb = (c: number) => {
  const v = c <= 0.0031308 ? c * 12.92 : 1.055 * Math.pow(c, 1 / 2.4) - 0.055;
  return clamp(Math.round(v * 255), 0, 255);
};

function rgbToLab(r: number, g: number, b: number) {
  const R = srgbToLinear(r), G = srgbToLinear(g), B = srgbToLinear(b);
  const X = (R * 0.4124564 + G * 0.3575761 + B * 0.1804375) * 100;
  const Y = (R * 0.2126729 + G * 0.7151522 + B * 0.0721750) * 100;
  const Z = (R * 0.0193339 + G * 0.1191920 + B * 0.9503041) * 100;
  const f = (t: number) => (t > 0.008856 ? Math.cbrt(t) : 7.787 * t + 16 / 116);
  const fx = f(X / 95.0489), fy = f(Y / 100), fz = f(Z / 108.884);
  return { l: 116 * fy - 16, a: 500 * (fx - fy), b: 200 * (fy - fz) };
}

// 왕복 변환 시 손실 발생. sRGB 범위 밖 값은 clamp돼 원래 값과 달라질 수 있음
function labToRgb(l: number, a: number, b: number): Rgb {
  const fy = (l + 16) / 116, fx = fy + a / 500, fz = fy - b / 200;
  const finv = (t: number) => (t ** 3 > 0.008856 ? t ** 3 : (t - 16 / 116) / 7.787);
  const X = finv(fx) * 95.0489, Y = finv(fy) * 100, Z = finv(fz) * 108.884;
  const x = X / 100, y = Y / 100, z = Z / 100;
  return {
    r: linearToSrgb(x * 3.2404542 + y * -1.5371385 + z * -0.4985314),
    g: linearToSrgb(x * -0.9692660 + y * 1.8760108 + z * 0.0415560),
    b: linearToSrgb(x * 0.0556434 + y * -0.2040259 + z * 1.0572252),
  };
}

const FORMATS = ["HEX", "RGB", "HSL", "LAB"] as const;
type Format = (typeof FORMATS)[number];

const MAX_SWATCHES = 10;
const NO_SWATCHES: readonly ColorPickerSwatch[] = [];

const cx = (...v: (string | false | undefined)[]) => v.filter(Boolean).join(" ");

// 형식 선택기, 흐름 위 목록이라 바깥 클릭 시 닫기
function FormatSelect({
  value, onChange,
}: { value: Format; onChange: (f: Format) => void }) {
  const [open, setOpen] = React.useState(false);
  // 바깥 클릭 판별 기준은 전체 영역. 목록이 버튼 밖으로 나와 있어서임
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect( => {
    if (!open) return;
    const outside = (e: PointerEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    // keydown 처리, Esc 닫기 지원
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("pointerdown", outside);
    window.addEventListener("keydown", esc);
    return  => {
      window.removeEventListener("pointerdown", outside);
      window.removeEventListener("keydown", esc);
    };
  }, [open]);

  return (
    // 목록은 버튼 바깥 배치. button 중첩 시 마크업 무효로 하이드레이션 오류 발생
    <div className="ods-colorpicker-format-slot" ref={ref}>
      <button
        type="button"
        className="ods-colorpicker-format"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="값 형식"
        onClick={ => setOpen((o) => !o)}
      >
        {value}
        <ChevronDown className="ods-colorpicker-icon" aria-hidden="true" />
      </button>
      {open && (
        <div
          className="ods-colorpicker-format-menu"
          role="listbox"
          aria-label="값 형식"
        >
          {FORMATS.map((f) => (
            <button
              key={f}
              type="button"
              role="option"
              aria-selected={f === value}
              className="ods-colorpicker-format-option"
              onClick={ => { onChange(f); setOpen(false); }}
            >
              {f}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

// 숫자 필드 하나. 라벨은 필드 안에 고정
function ChannelField({
  label, value, min, max, onCommit,
}: {
  label: string; value: number; min: number; max: number;
  onCommit: (n: number) => void;
}) {
  const round = (n: number) => String(Math.round(n * 10) / 10);
  const [draft, setDraft] = React.useState( => round(value));

  // useEffect 대신 렌더 중 동기화. 외부 값과 입력 값 프레임 어긋남 없음
  const [seen, setSeen] = React.useState(value);
  if (value !== seen) { setSeen(value); setDraft(round(value)); }

  const commit =  => {
    const n = parseFloat(draft);
    const next = clamp(Number.isNaN(n) ? min : n, min, max);
    setDraft(round(next));
    onCommit(next);
  };

  return (
    <div className="ods-colorpicker-field ods-colorpicker-field--num">
      <span className="ods-colorpicker-field-label" aria-hidden="true">{label}</span>
      <input
        className="ods-colorpicker-field-input"
        value={draft}
        inputMode="decimal"
        aria-label={`${label} 값`}
        onChange={(e) => setDraft(e.target.value)}
        onBlur={commit}
        onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.blur; }}
      />
    </div>
  );
}

export function Colorpicker({
  swatches = NO_SWATCHES,
  value,
  defaultValue,
  onValueChange,
  className,
  ...rest
}: ColorPickerProps) {
  // 처음 색에서 HSV 유도. 고정 시 defaultValue와 화면값 달라지는 문제 있음
  const [seed] = React.useState( =>
    hexToRgb(value ?? defaultValue ?? swatches[0]?.value ?? "#4a7fd4"));
  const first = seed ? rgbToHsv(seed.r, seed.g, seed.b) : null;

  const [hue, setHue] = React.useState(first?.h ?? 212);
  const [sat, setSat] = React.useState(first?.s ?? 72);
  const [val, setVal] = React.useState(first?.v ?? 83);
  const [alpha, setAlpha] = React.useState(100);
  const [format, setFormat] = React.useState<Format>("HEX");

  const rgb = hsvToRgb(hue, sat, val);
  const hex = rgbToHex(rgb.r, rgb.g, rgb.b);
  // 투명도도 값의 일부. 6자리만 출력하면 알파 변경이 반영되지 않음
  const aa = clamp(Math.round((alpha / 100) * 255), 0, 255)
    .toString(16).padStart(2, "0").toUpperCase;
  const current = alpha >= 100 ? `#${hex}` : `#${hex}${aa}`;

  const emitted = React.useRef<string | null>(null);
  const [driving, setDriving] = React.useState(false);
  const pointerHeld = React.useRef(false);

  React.useEffect( => {
    const byPointer =  => { pointerHeld.current = false; setDriving(false); };
    const byKey =  => { if (!pointerHeld.current) setDriving(false); };
    window.addEventListener("pointerup", byPointer);
    window.addEventListener("pointercancel", byPointer);
    window.addEventListener("keyup", byKey);
    return  => {
      window.removeEventListener("pointerup", byPointer);
      window.removeEventListener("pointercancel", byPointer);
      window.removeEventListener("keyup", byKey);
    };
  }, []);

  const [seenValue, setSeenValue] = React.useState(value);
  if (value !== undefined && !driving && value !== seenValue) {
    setSeenValue(value);
    if (value.toLowerCase !== emitted.current?.toLowerCase) {
      const c = hexToRgb(value);
      if (c) {
        const n = rgbToHsv(c.r, c.g, c.b);
        // 기존 색상값 유지. 0 초기화 시 회색 구간에서 빨강으로 튀는 문제가 있음
        if (n.s > 0) setHue(n.h);
        setSat(n.s);
        setVal(n.v);
      }
    }
  }

  // 첫 렌더링 시 onValueChange 미호출. 호출 시 값 오전달 문제 있음
  const lastSent = React.useRef<string>(current);
  React.useEffect( => {
    if (lastSent.current === current) return;
    lastSent.current = current;
    emitted.current = current;
    onValueChange?.(current);
  }, [current, onValueChange]);

  const [list, setList] = React.useState<ColorPickerSwatch[]>(
     => swatches.slice(0, MAX_SWATCHES));

  const full = list.length >= MAX_SWATCHES;
  const addLabel = full
    ? `스와치가 가득 찼습니다 (최대 ${MAX_SWATCHES}개). 담으려면 먼저 하나를 빼세요`
    : "이 색을 스와치에 담기";

  const add =  => {
    if (full) return;
    // label 필수, 색 이름 사용. 비우면 스크린리더에 버튼만 읽힐 수 있음
    setList((prev) => [...prev, { value: current, label: current }]);
  };
  const remove = (i: number) => {
    setList((prev) => prev.filter((_, k) => k !== i));
  };

  const area = React.useRef<HTMLDivElement>(null);
  const dragging = React.useRef(false);

  const applyPointer = (clientX: number, clientY: number) => {
    const el = area.current;
    if (!el) return;
    const r = el.getBoundingClientRect;
    setSat(clamp((clientX - r.left) / r.width, 0, 1) * 100);
    setVal((1 - clamp((clientY - r.top) / r.height, 0, 1)) * 100);
  };

  React.useEffect( => {
    const move = (e: PointerEvent) => {
      if (dragging.current) applyPointer(e.clientX, e.clientY);
    };
    const up =  => { dragging.current = false; };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return  => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, []);

  // role="application"은 보조기술 탐색 끔. 방향키 미처리시 키보드 막힘 문제임
  const areaKey = (e: React.KeyboardEvent) => {
    const step = e.shiftKey ? 10 : 1;
    if (e.key === "ArrowLeft") setSat((s) => clamp(s - step, 0, 100));
    else if (e.key === "ArrowRight") setSat((s) => clamp(s + step, 0, 100));
    else if (e.key === "ArrowUp") setVal((v) => clamp(v + step, 0, 100));
    else if (e.key === "ArrowDown") setVal((v) => clamp(v - step, 0, 100));
    else return;
    e.preventDefault;
  };

  const [hasDropper, setHasDropper] = React.useState(false);
  // 값은 첫 렌더링 이후 결정. 서버 렌더링에는 window가 없어 미리 알 수 없음
  React.useEffect( => { setHasDropper("EyeDropper" in window); }, []);

  const dropper = async  => {
    const Ctor = (window as unknown as {
      EyeDropper?: new  => { open: Promise<{ sRGBHex: string }> };
    }).EyeDropper;
    if (!Ctor) return;
    try {
      const { sRGBHex } = await new Ctor.open;
      const c = hexToRgb(sRGBHex);
      if (c) {
        const n = rgbToHsv(c.r, c.g, c.b);
        if (n.s > 0) setHue(n.h);
        setSat(n.s);
        setVal(n.v);
      }
    } catch {
      // Esc 취소 상태 처리
    }
  };

  const fromRgb = (r: number, g: number, b: number) => {
    const n = rgbToHsv(clamp(r, 0, 255), clamp(g, 0, 255), clamp(b, 0, 255));
    if (n.s > 0) setHue(n.h);
    setSat(n.s);
    setVal(n.v);
  };

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
  const lab = rgbToLab(rgb.r, rgb.g, rgb.b);

  const [hexDraft, setHexDraft] = React.useState(hex);
  const [seenHex, setSeenHex] = React.useState(hex);
  if (hex !== seenHex) { setSeenHex(hex); setHexDraft(hex); }

  const fields = format === "HEX" ? (
    <div className="ods-colorpicker-field">
      <span className="ods-colorpicker-field-affix" aria-hidden="true">#</span>
      <input
        className="ods-colorpicker-field-input"
        value={hexDraft}
        aria-label="색 값"
        onChange={(e) => {
          const clean = e.target.value.replace(/[^0-9a-fA-F]/g, "").slice(0, 6).toUpperCase;
          setHexDraft(clean);
          const c = hexToRgb(clean);
          if (c) fromRgb(c.r, c.g, c.b);
        }}
      />
    </div>
  ) : format === "RGB" ? (
    <>
      <ChannelField label="R" value={rgb.r} min={0} max={255} onCommit={(n) => fromRgb(n, rgb.g, rgb.b)} />
      <ChannelField label="G" value={rgb.g} min={0} max={255} onCommit={(n) => fromRgb(rgb.r, n, rgb.b)} />
      <ChannelField label="B" value={rgb.b} min={0} max={255} onCommit={(n) => fromRgb(rgb.r, rgb.g, n)} />
    </>
  ) : format === "HSL" ? (
    <>
      <ChannelField label="H" value={hsl.h} min={0} max={360} onCommit={(n) => { const c = hslToRgb(n, hsl.s, hsl.l); fromRgb(c.r, c.g, c.b); }} />
      <ChannelField label="S" value={hsl.s} min={0} max={100} onCommit={(n) => { const c = hslToRgb(hsl.h, n, hsl.l); fromRgb(c.r, c.g, c.b); }} />
      <ChannelField label="L" value={hsl.l} min={0} max={100} onCommit={(n) => { const c = hslToRgb(hsl.h, hsl.s, n); fromRgb(c.r, c.g, c.b); }} />
    </>
  ) : (
    <>
      <ChannelField label="L" value={lab.l} min={0} max={100} onCommit={(n) => { const c = labToRgb(n, lab.a, lab.b); fromRgb(c.r, c.g, c.b); }} />
      <ChannelField label="a" value={lab.a} min={-128} max={127} onCommit={(n) => { const c = labToRgb(lab.l, n, lab.b); fromRgb(c.r, c.g, c.b); }} />
      <ChannelField label="b" value={lab.b} min={-128} max={127} onCommit={(n) => { const c = labToRgb(lab.l, lab.a, n); fromRgb(c.r, c.g, c.b); }} />
    </>
  );

  const solid = `rgb(${rgb.r} ${rgb.g} ${rgb.b})`;
  const painted = `rgb(${rgb.r} ${rgb.g} ${rgb.b} / ${alpha / 100})`;

  return (
    <div
      className={cx("ods-colorpicker", className)}
      // root에서 capture, window에서 해제. 요소 단위로 잡으면 선 두 겹 보임
      onPointerDownCapture={ => { pointerHeld.current = true; setDriving(true); }}
      onKeyDownCapture={ => setDriving(true)}
      {...rest}
    >
      <div
        ref={area}
        className="ods-colorpicker-area"
        role="application"
        aria-label="채도와 명도"
        tabIndex={0}
        style={{ "--ods-colorpicker-hue": hue } as React.CSSProperties}
        onPointerDown={(e) => { dragging.current = true; applyPointer(e.clientX, e.clientY); }}
        onKeyDown={areaKey}
      >
        <div
          className="ods-colorpicker-thumb"
          style={{
            "--ods-colorpicker-x": `${sat}%`,
            "--ods-colorpicker-y": `${100 - val}%`,
          } as React.CSSProperties}
        />
      </div>

      <input
        className="ods-colorpicker-hue"
        type="range" min={0} max={360} value={Math.round(hue)}
        aria-label="색상"
        onChange={(e) => setHue(Number(e.target.value))}
      />
      <input
        className="ods-colorpicker-alpha"
        type="range" min={0} max={100} value={Math.round(alpha)}
        aria-label="투명도"
        style={{ "--ods-colorpicker-solid": solid } as React.CSSProperties}
        onChange={(e) => setAlpha(Number(e.target.value))}
      />

      <div className="ods-colorpicker-preview">
        <button
          type="button"
          className="ods-colorpicker-current"
          // disabled 아님, Tab 건너뛰면 이름조차 못 읽음. 막는 동작은 add가 맡음
          aria-disabled={full || undefined}
          aria-label={addLabel}
          style={{ "--ods-colorpicker-swatch": painted } as React.CSSProperties}
          onClick={add}
        >
          <span className="ods-colorpicker-current-mark">
            <Plus className="ods-colorpicker-icon" aria-hidden="true" />
          </span>
        </button>
        <span className="ods-colorpicker-hex">{current.toUpperCase}</span>
        {hasDropper && (
          <button
            type="button"
            className="ods-colorpicker-pipette"
            aria-label="화면에서 색 집기"
            onClick={dropper}
          >
            <Pipette className="ods-colorpicker-icon" aria-hidden="true" />
          </button>
        )}
      </div>

      <div className="ods-colorpicker-row">
        <FormatSelect value={format} onChange={setFormat} />
        <div className="ods-colorpicker-fields">{fields}</div>
        <div className="ods-colorpicker-field ods-colorpicker-field--num ods-colorpicker-field--alpha">
          <input
            className="ods-colorpicker-field-input"
            value={Math.round(alpha)}
            inputMode="numeric"
            aria-label="투명도 값"
            onChange={(e) => {
              const n = parseInt(e.target.value.replace(/[^0-9]/g, "") || "0", 10);
              setAlpha(clamp(Number.isNaN(n) ? 100 : n, 0, 100));
            }}
          />
          <span className="ods-colorpicker-field-affix" aria-hidden="true">%</span>
        </div>
      </div>

      {list.length > 0 && (
        <div className="ods-colorpicker-swatches">
          <div className="ods-colorpicker-swatches-head">
            {/* 예제 텍스트 그대로 사용 */}
            <span>Swatches</span>
            <span className="ods-colorpicker-swatches-count">
              {list.length}/{MAX_SWATCHES}
            </span>
          </div>
          <div className="ods-colorpicker-swatch-grid">
            {/* key는 값 아닌 위치임. 색 중복 시 값을 key로 쓰면 덮어쓸 수 있음 */}
            {list.map((s, i) => (
              // 감싸는 상자가 absolute 위치 기준. button은 중첩 불가라 상자가 필수임
              <div className="ods-colorpicker-swatch-slot" key={i}>
                {/* 눌러도 동작 없어 div 사용. 위에 덮인 버튼이 클릭을 받음 */}
                <div
                  className="ods-colorpicker-swatch"
                  style={{ "--ods-colorpicker-swatch": s.value } as React.CSSProperties}
                />
                <button
                  type="button"
                  className="ods-colorpicker-swatch-remove"
                  aria-label={`${s.label} 빼기`}
                  onClick={ => remove(i)}
                >
                  <X className="ods-colorpicker-icon" aria-hidden="true" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
