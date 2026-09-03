import * as React from "react";
// 아이콘은 Lucide만 사용. 글리프 대체 시 글꼴에 따라 모양이 달라지는 문제가 있음
import { Minus, Pipette, Plus } from "lucide-react";
import { cx } from "../cx";
import type { ColorPickerProps, ColorPickerSwatch } from "../../systems/props";

type Format = "HEX" | "RGB" | "HSL";
const FORMATS: readonly Format[] = ["HEX", "RGB", "HSL"];

const clamp01 = (n: number) => Math.min(1, Math.max(0, n));
const hex2 = (x: number) =>
  Math.round(clamp01(x) * 255).toString(16).padStart(2, "0");

// 0..1을 반올림해 74% 형식 문자열로 변환
const pct = (n: number) => `${Math.round(n * 10000) / 100}%`;

function hsvToRgb(h: number, s: number, v: number): [number, number, number] {
  const f = (n: number) => {
    const k = (n + h / 60) % 6;
    return v - v * s * Math.max(0, Math.min(k, 4 - k, 1));
  };
  return [f(5), f(3), f(1)];
}

// 알파 포함 HSV 값을 hex 로 변환. 불투명이면 6자리, 아니면 8자리 반환
function compose(h: number, s: number, v: number, a: number): string {
  const [r, g, b] = hsvToRgb(h, s, v);
  const base = `#${hex2(r)}${hex2(g)}${hex2(b)}`;
  return a >= 1 ? base : base + hex2(a);
}

function hexToHsv(
  hex: string,
): { h: number | null; s: number; v: number; a: number } | null {
  const m = hex.trim.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
  if (!m) return null;
  let d = m[1];
  if (d.length === 3) d = d.split("").map((c) => c + c).join("");
  const n = parseInt(d.slice(0, 6), 16);
  const a = d.length === 8 ? parseInt(d.slice(6, 8), 16) / 255 : 1;
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), diff = max - min;
  if (diff === 0) return { h: null, s: 0, v: max, a };
  let h = max === r ? ((g - b) / diff) % 6 : max === g ? (b - r) / diff + 2 : (r - g) / diff + 4;
  h *= 60;
  if (h < 0) h += 360;
  return { h, s: diff / max, v: max, a };
}

function parse(text: string): { h: number | null; s: number; v: number; a: number } | null {
  const t = text.trim;
  const asHex = hexToHsv(t.startsWith("#") ? t : `#${t}`);
  if (asHex) return asHex;

  const nums = t.match(/-?[\d.]+/g)?.map(Number);
  if (!nums || nums.length < 3) return null;
  const alpha = nums.length >= 4 ? (t.includes("%", t.lastIndexOf(String(nums[3]))) ? nums[3] / 100 : nums[3]) : 1;

  if (/^hsla?\s*\(/i.test(t)) {
    const [hh, ss, ll] = [nums[0], nums[1] / 100, nums[2] / 100];
    const v = ll + ss * Math.min(ll, 1 - ll);
    return { h: ((hh % 360) + 360) % 360, s: v === 0 ? 0 : 2 * (1 - ll / v), v, a: clamp01(alpha) };
  }
  const got = hexToHsv(`#${hex2(nums[0] / 255)}${hex2(nums[1] / 255)}${hex2(nums[2] / 255)}`);
  return got ? { ...got, a: clamp01(alpha) } : null;
}

// 담을 수 있는 상한 8개, 두 행. CSS 8열과 안 맞으면 마지막 행이 어중간하게 남음
const MAX_SWATCHES = 16;

// 기본값 외부 선언. swatches=[]면 렌더링마다 새 배열 생겨 재계산 반복
const NO_SWATCHES: readonly ColorPickerSwatch[] = [];

export function Colorpicker({
  swatches = NO_SWATCHES, value, defaultValue, onValueChange, allowCustom = true,
  className, ...rest
}: ColorPickerProps) {
  const [inner, setInner] = React.useState(defaultValue ?? swatches[0]?.value ?? "#000000");
  const current = value ?? inner;
  const emitted = React.useRef<string | null>(null);
  const [driving, setDriving] = React.useState(false);
  // 포인터 눌림 여부 표시. keyup이 드래그 해제를 못 하게 막는 가드임
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
  const commit = React.useCallback((next: string) => {
    emitted.current = next;
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  }, [value, onValueChange]);

  const [open, setOpen] = React.useState(false);
  const [format, setFormat] = React.useState<Format>("HEX");
  const [seed] = React.useState(
    // 지연 초기화 적용. useState(hexToHsv(...))는 렌더마다 재계산 문제가 있음
     => hexToHsv(value ?? defaultValue ?? swatches[0]?.value ?? "#000000"),
  );
  const [hue, setHue] = React.useState(seed?.h ?? 212);
  const [sat, setSat] = React.useState(seed?.s ?? 0.72);
  const [val, setVal] = React.useState(seed?.v ?? 0.66);
  const [alpha, setAlpha] = React.useState(seed?.a ?? 1);

  // driving이 조건 감싸기. setSeenValue만 안쪽 두면 계기 사라질 수 있음
  const [seenValue, setSeenValue] = React.useState(value);
  if (value !== undefined && !driving && value !== seenValue) {
    setSeenValue(value);
    if (value.toLowerCase !== emitted.current?.toLowerCase) {
      const c = hexToHsv(value);
      if (c) {
        setHue(c.h ?? hue);
        setSat(c.s);
        setVal(c.v);
        setAlpha(c.a);
      }
    }
  }

  // 필드별 입력 중인 글자
  const [drafts, setDrafts] = React.useState<Record<number, string>>({});

  const [added, setAdded] = React.useState<ColorPickerSwatch[]>([]);
  const [removed, setRemoved] = React.useState<readonly string[]>([]);
  const list = React.useMemo( => {
    const gone = new Set(removed.map((v) => v.toLowerCase));
    return [...swatches, ...added]
      .filter((s) => !gone.has(s.value.toLowerCase))
      .slice(0, MAX_SWATCHES);
  }, [swatches, added, removed]);

  const picked = list.findIndex(
    (s) => s.value.toLowerCase === current.toLowerCase,
  );
  // 선택 없어도 포커스 위치 필요. -1만이면 Tab이 그룹째 건너뛰어 복귀되지 않음
  const stop = picked >= 0 ? picked : 0;

  const apply = (h: number, s: number, v: number, a: number) => {
    setHue(h); setSat(s); setVal(v); setAlpha(a);
    commit(compose(h, s, v, a));
  };

  const selectSwatch = (next: string) => {
    const c = hexToHsv(next);
    if (c) apply(c.h ?? hue, c.s, c.v, c.a);
    else commit(next);
    setDrafts({});
  };

  const groupRef = React.useRef<HTMLDivElement>(null);
  const areaRef = React.useRef<HTMLDivElement>(null);

  const onGroupKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const delta =
      e.key === "ArrowRight" || e.key === "ArrowDown" ? 1 :
      e.key === "ArrowLeft" || e.key === "ArrowUp" ? -1 : 0;
    if (!delta || list.length === 0) return;
    e.preventDefault;
    const from = picked >= 0 ? picked : 0;
    const to = (from + delta + list.length) % list.length;
    selectSwatch(list[to].value);
    groupRef.current?.querySelectorAll<HTMLButtonElement>("[role='radio']")[to]?.focus;
  };

  const setFromPoint = (clientX: number, clientY: number) => {
    const el = areaRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect;
    if (r.width === 0 || r.height === 0) return;
    apply(hue, clamp01((clientX - r.left) / r.width), clamp01(1 - (clientY - r.top) / r.height), alpha);
    setDrafts({});
  };
  const onAreaPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    setFromPoint(e.clientX, e.clientY);
  };
  const onAreaPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    // 캡처 들고 있을 때만 따라가기. 아니면 지나가기만 해도 색이 바뀌는 문제 있음
    if (!e.currentTarget.hasPointerCapture(e.pointerId)) return;
    setFromPoint(e.clientX, e.clientY);
  };
  // 키보드로 면 이동 가능. tabIndex로 포커스 후 이 처리기가 이동 처리
  const onAreaKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const step = e.shiftKey ? 0.1 : 0.02;
    let s = sat, v = val;
    if (e.key === "ArrowRight") s = clamp01(sat + step);
    else if (e.key === "ArrowLeft") s = clamp01(sat - step);
    else if (e.key === "ArrowUp") v = clamp01(val + step);
    else if (e.key === "ArrowDown") v = clamp01(val - step);
    else return;
    e.preventDefault;
    apply(hue, s, v, alpha);
    setDrafts({});
  };

  type Channel = { value: string; label: string; prefix?: string; num?: boolean };
  const channels = : Channel[] => {
    if (format === "HEX") {
      // 고정 # 문자 값에서 제외
      return [{ value: compose(hue, sat, val, alpha).slice(1), label: "색 값", prefix: "#" }];
    }
    if (format === "RGB") {
      const [r, g, b] = hsvToRgb(hue, sat, val).map((x) => Math.round(clamp01(x) * 255));
      return [
        { value: String(r), label: "빨강", num: true },
        { value: String(g), label: "초록", num: true },
        { value: String(b), label: "파랑", num: true },
      ];
    }
    const l = val * (1 - sat / 2);
    const sl = l === 0 || l === 1 ? 0 : (val - l) / Math.min(l, 1 - l);
    return [
      { value: String(Math.round(hue)), label: "색상", num: true },
      { value: String(Math.round(sl * 100)), label: "채도", num: true },
      { value: String(Math.round(l * 100)), label: "명도", num: true },
    ];
  };

  // 한 필드만 확정, 나머지는 현재 값 유지
  const commitChannel = (i: number) => {
    const raw = drafts[i];
    if (raw === undefined) return;
    const vals = channels.map((c, j) => (j === i ? raw : c.value));
    const text =
      format === "HEX" ? `#${vals[0]}`
        : format === "RGB" ? `rgb(${vals.join(" ")})`
          : `hsl(${vals[0]} ${vals[1]}% ${vals[2]}%)`;
    const c = parse(text);
    if (c) apply(c.h ?? hue, c.s, c.v, c.a);
    setDrafts({}); // 읽기 실패 시 조용히 복귀. 화면이 기준임
  };

  // 스포이드는 지원 브라우저에서만 표시. 미지원 환경에선 비활성 버튼도 안 보임
  const [hasPipette] = React.useState(
     => typeof window !== "undefined" && "EyeDropper" in window,
  );
  const pickFromScreen = async  => {
    try {
      const ED = (window as unknown as { EyeDropper: new  => { open: Promise<{ sRGBHex: string }> } }).EyeDropper;
      const { sRGBHex } = await new ED.open;
      const c = hexToHsv(sRGBHex);
      if (c) apply(c.h ?? hue, c.s, c.v, alpha);
    } catch {
      // Esc 취소 시 reject 처리
    }
  };

  const solid = compose(hue, sat, val, 1);

  const contained = picked >= 0;
  const full = list.length >= MAX_SWATCHES;
  const blocked = !contained && full;
  const markLabel =
    contained ? "이 색을 스와치에서 빼기"
      : full ? `스와치가 가득 찼습니다 (최대 ${MAX_SWATCHES}개). 담으려면 먼저 하나를 빼세요`
        : "이 색을 스와치에 담기";
  // 제외 후에도 선택 색상 유지. 제외 대상은 목록이지 선택값이 아니므로 값까지 바꾸면 색이 사라지는 문제가 있음
  const toggleCurrent =  => {
    if (blocked) return;
    if (contained) {
      const gone = current.toLowerCase;
      setRemoved((prev) => (prev.some((v) => v.toLowerCase === gone) ? prev : [...prev, current]));
      setAdded((prev) => prev.filter((s) => s.value.toLowerCase !== gone));
    } else {
      // 재담기 위해 제외 목록에서도 함께 제거
      const back = current.toLowerCase;
      setRemoved((prev) => prev.filter((v) => v.toLowerCase !== back));
      setAdded((prev) =>
        prev.some((s) => s.value.toLowerCase === back)
          ? prev
          : [...prev, { value: current, label: current }]);
    }
  };

  return (
    <div
      className={cx("ods-colorpicker", className)}
      // 시작 위치만 지정, 끝은 창이 처리
      onPointerDownCapture={ => { pointerHeld.current = true; setDriving(true); }}
      onKeyDownCapture={ => setDriving(true)}
      {...rest}
    >
      {allowCustom && (
        <button
          type="button"
          className="ods-colorpicker-more"
          aria-expanded={open}
          onClick={ => setOpen((o) => !o)}
        >
          다른 색…
        </button>
      )}

      {/* hidden으로 접힘 처리. display:none 걸면 속성과 스타일에 남을 수 있음 */}
      {allowCustom && (
        <div className="ods-colorpicker-custom" hidden={!open}>
          {/* role="application" 신중히 적용. 방향키 미처리시 키보드 막힘 문제임 */}
          <div
            ref={areaRef}
            className="ods-colorpicker-area"
            role="application"
            aria-label="채도와 명도"
            tabIndex={0}
            style={{ ["--ods-colorpicker-hue" as string]: String(hue) }}
            onPointerDown={onAreaPointerDown}
            onPointerMove={onAreaPointerMove}
            onKeyDown={onAreaKeyDown}
          >
            <div
              className="ods-colorpicker-thumb"
              style={{
                ["--ods-colorpicker-x" as string]: pct(sat),
                ["--ods-colorpicker-y" as string]: pct(1 - val),
              }}
            />
          </div>

          <input
            className="ods-colorpicker-hue"
            type="range" min={0} max={360} value={Math.round(hue)}
            aria-label="색상"
            onChange={(e) => { apply(Number(e.target.value), sat, val, alpha); setDrafts({}); }}
          />

          {/* 격자가 있어야 비침 효과가 보임. 단색 위에서는 흐린 색으로만 보임 */}
          <input
            className="ods-colorpicker-alpha"
            type="range" min={0} max={100} value={Math.round(alpha * 100)}
            aria-label="투명도"
            style={{ ["--ods-colorpicker-solid" as string]: solid }}
            onChange={(e) => { apply(hue, sat, val, Number(e.target.value) / 100); setDrafts({}); }}
          />

          <div className="ods-colorpicker-row">
            {/* 표시와 담기, 빼기를 한 곳에서 처리 */}
            <button
              type="button"
              className="ods-colorpicker-current"
              aria-label={markLabel}
              title={markLabel}
              aria-disabled={blocked || undefined}
              style={{ ["--ods-colorpicker-swatch" as string]: current }}
              onClick={toggleCurrent}
            >
              <span className="ods-colorpicker-current-mark">
                {contained
                  ? <Minus className="ods-colorpicker-icon" aria-hidden="true" />
                  : <Plus className="ods-colorpicker-icon" aria-hidden="true" />}
              </span>
            </button>
            {hasPipette && (
              <button
                type="button"
                className="ods-colorpicker-pipette"
                aria-label="화면에서 색 집기"
                onClick={pickFromScreen}
              >
                <Pipette className="ods-colorpicker-icon" aria-hidden="true" />
              </button>
            )}
            <select
              className="ods-colorpicker-format"
              aria-label="값 형식"
              value={format}
              onChange={(e) => { setFormat(e.target.value as Format); setDrafts({}); }}
            >
              {FORMATS.map((f) => <option key={f} value={f}>{f}</option>)}
            </select>
            {/* 고정 글자 #를 값에 섞지 않기 */}
            <div className="ods-colorpicker-fields">
              {channels.map((c, i) => (
                <div
                  key={c.label}
                  className={cx("ods-colorpicker-field", c.num && "ods-colorpicker-field--num")}
                >
                  {c.prefix && (
                    <span className="ods-colorpicker-field-affix" aria-hidden="true">
                      {c.prefix}
                    </span>
                  )}
                  <input
                    className="ods-colorpicker-field-input"
                    aria-label={c.label}
                    inputMode={c.num ? "numeric" : "text"}
                    value={drafts[i] ?? c.value}
                    onChange={(e) => setDrafts((d) => ({ ...d, [i]: e.target.value }))}
                    onBlur={ => commitChannel(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") { e.preventDefault; commitChannel(i); }
                    }}
                  />
                </div>
              ))}

              {/* 투명도도 같은 필드 모양 사용, 폭 고정은 이 필드에만 적용 */}
              <div className="ods-colorpicker-field ods-colorpicker-field--num ods-colorpicker-field--alpha">
                <input
                  className="ods-colorpicker-field-input"
                  aria-label="투명도 값"
                  inputMode="numeric"
                  value={String(Math.round(alpha * 100))}
                  onChange={(e) => {
                    const n = Number(e.target.value.replace(/[^\d]/g, ""));
                    if (Number.isFinite(n)) apply(hue, sat, val, clamp01(n / 100));
                  }}
                />
                <span className="ods-colorpicker-field-affix" aria-hidden="true">%</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 접힘 상태 값. 펼치면 위 입력 필드가 대체 */}
      {!open && <span className="ods-colorpicker-value">{current}</span>}

      {/* 맨 아래 위치, 선택한 항목이 쌓이는 순서 */}
      {list.length > 0 && (
        <div
          ref={groupRef}
          className="ods-colorpicker-swatches"
          role="radiogroup"
          aria-label="담아 둔 색"
          onKeyDown={onGroupKeyDown}
        >
          {list.map((s, i) => (
            <button
              key={s.value}
              type="button"
              role="radio"
              className="ods-colorpicker-swatch"
              aria-checked={i === picked}
              aria-label={s.label}
              tabIndex={i === stop ? 0 : -1}
              style={{ ["--ods-colorpicker-swatch" as string]: s.value }}
              onClick={ => selectSwatch(s.value)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
Colorpicker.displayName = "Colorpicker";
