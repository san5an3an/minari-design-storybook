export { MODES, type Mode } from "../systems/types";
// 별도로 import 추가. 재내보내기만으로는 이 파일에서 사용할 수 없음
import type { Mode } from "../systems/types";

export const MODE_LABEL: Record<Mode, string> = {
  light: "라이트",
  dark: "다크",
  "high-contrast": "고대비",
};

// 토큰 한 행에 이름 하나와 모드별 값이 연결
export interface ColorToken {
  // CSS 변수 이름, -- 포함한 원문 그대로
  name: string;
  // `base` · `semantic` · `component`
  tier: string;
  // 화면 분류 단위, base는 역할 기준, semantic은 구분 기준
  group: string;
  values: Record<Mode, string | undefined>;
}

// 값 전체를 한번에 지정. 색만 지정하면 크기, 굵기, 행간이 반영되지 않음
const DECL = /(--[a-z0-9-]+)\s*:\s*([^;]+);/g;

function declarations(chunk: string): Map<string, string> {
  const out = new Map<string, string>;
  for (const [, name, value] of chunk.matchAll(DECL)) out.set(name, value.trim);
  return out;
}

// hex로 시작하는 값만 색 토큰, box-shadow는 색 섞여도 제외
export function isColor(value: string | undefined): boolean {
  return !!value && /^#[0-9a-fA-F]{3,8}$/.test(value);
}

// dark, high-contrast 블록은 바뀌는 토큰만 다시 쓰기
function scopeOf(css: string, marker: string, base: Map<string, string>) {
  const at = css.indexOf(marker);
  if (at < 0) return new Map(base);
  // @media prefers-color-scheme 중복 블록 제외
  const rest = css.slice(at + marker.length);
  const chunk = rest.split("@media")[0];
  return new Map([...base, ...declarations(chunk)]);
}

// base, semantic은 --{tier}-{...}의 세 번째 부분까지가 그룹 이름임
function classify(name: string): { tier: string; group: string } {
  const parts = name.replace(/^--/, "").split("-");
  const tier = parts[0] ?? "";
  if (tier === "base") return { tier, group: parts[2] ?? "" };      // base-color-brand-9
  if (tier === "semantic") return { tier, group: parts[1] ?? "" };  // semantic-bg-brand-default
  return { tier, group: parts[1] ?? "" };                           // component-button-…
}

// vars.css의 모든 토큰. 색, 크기, 굵기, 간격 포함
export function parseTokens(css: string): ColorToken[] {
  const light = declarations(css.split(':root[data-theme="dark"]')[0]);
  const dark = scopeOf(css, ':root[data-theme="dark"]', light);
  const hc = scopeOf(css, ':root[data-theme="high-contrast"]', light);

  return [...light.keys].map((name) => ({
    name,
    ...classify(name),
    values: { light: light.get(name), dark: dark.get(name), "high-contrast": hc.get(name) },
  }));
}

// 컬러 스키마, 컴포넌트 색상표용 색상값
export function parseColorTokens(css: string): ColorToken[] {
  return parseTokens(css).filter((t) => isColor(t.values.light));
}

// 지정 접두사로 시작하는 이름만 필터링. 타이포그래피 화면에서 사용
export function startingWith(tokens: ColorToken[], prefix: string): ColorToken[] {
  return tokens.filter((t) => t.name.startsWith(prefix));
}

// 그룹 이름별 토큰 매핑. 입력 순서 유지
export function groupBy(tokens: ColorToken[], tier: string): Map<string, ColorToken[]> {
  const out = new Map<string, ColorToken[]>;
  for (const t of tokens) {
    if (t.tier !== tier) continue;
    const bucket = out.get(t.group) ?? [];
    bucket.push(t);
    out.set(t.group, bucket);
  }
  return out;
}

// base 팔레트는 1~12 단계와 contrast로 구성. 문자열 정렬은 직접 계산
export function byStep(tokens: ColorToken[]): ColorToken[] {
  const step = (t: ColorToken) => {
    const last = t.name.split("-").pop ?? "";
    return /^\d+$/.test(last) ? Number(last) : 99;
  };
  return [...tokens].sort((a, b) => step(a) - step(b));
}
