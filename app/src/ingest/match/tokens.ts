import type { TokenCandidate } from "../types";

// --semantic-bg-brand-default를 bg.brand.default로 변환
export function toRef(cssVar: string): string {
  return cssVar.replace(/^--semantic-/, "").replace(/-/g, ".");
}

// 축약 색상 코드 #ABC를 #aabbcc로 정규화 후 비교
export function normalizeColor(v: string): string {
  const s = v.trim.toLowerCase;
  const m = /^#([0-9a-f]{3})$/.exec(s);
  if (m) return "#" + [...m[1]].map((c) => c + c).join("");
  return s;
}

// @param value 구체값 @param perSystem 시스템별 semantic 맵
export function matchToken(
  value: string,
  perSystem: Record<string, Record<string, string>>,
): TokenCandidate[] {
  const want = normalizeColor(value);
  const systems = Object.keys(perSystem);
  if (systems.length === 0) return [];

  const hits: Record<string, number> = {};
  for (const slug of systems) {
    for (const [cssVar, v] of Object.entries(perSystem[slug])) {
      if (normalizeColor(v) === want) hits[cssVar] = (hits[cssVar] ?? 0) + 1;
    }
  }
  const names = Object.keys(hits);
  if (names.length === 0) return [];

  // 두 토큰이 20색 전부에서 동일한지 확인. 하나라도 다르면 구별 가능 후보로 유지
  const alwaysSame = (a: string, b: string) =>
    systems.every((slug) => {
      const t = perSystem[slug];
      const va = t[a];
      const vb = t[b];
      // 한쪽에 값이 없으면 같다고 처리하지 않기
      return va !== undefined && vb !== undefined && normalizeColor(va) === normalizeColor(vb);
    });

  return names
    .map((cssVar) => ({
      token: toRef(cssVar),
      matchedSystems: hits[cssVar],
      indistinguishableFrom: names
        .filter((other) => other !== cssVar && alwaysSame(cssVar, other))
        .map(toRef),
    }))
    // 일치 항목 우선 정렬, 동일하면 이름순 정렬
    .sort(
      (a, b) => b.matchedSystems - a.matchedSystems || a.token.localeCompare(b.token),
    );
}
