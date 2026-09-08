import type { TokenCandidate } from "../types";

export function normalizeColor(v: string): string {
  const s = v.trim.toLowerCase;

  const short = /^#([0-9a-f]{3})$/.exec(s);
  if (short) return "#" + [...short[1]].map((c) => c + c).join("");

  const withAlpha = /^#([0-9a-f]{6})([0-9a-f]{2})$/.exec(s);
  if (withAlpha) return withAlpha[2] === "ff" ? "#" + withAlpha[1] : s;

  const rgb = /^rgba?\(\s*([0-9.]+)[\s,]+([0-9.]+)[\s,]+([0-9.]+)\s*(?:[,/]\s*([0-9.%]+)\s*)?\)$/.exec(s);
  if (rgb) {
    const a = rgb[4];
    // 알파 값이 없거나 1일 때만 hex로 변환
    if (a !== undefined && a !== "1" && a !== "1.0" && a !== "100%") return s;
    const hex = [rgb[1], rgb[2], rgb[3]]
      .map((n) => Math.max(0, Math.min(255, Math.round(Number(n)))).toString(16).padStart(2, "0"))
      .join("");
    return "#" + hex;
  }

  return s;
}

// @param value 구체값 @param perSystem 시스템별 참조명-값 맵
export function matchToken(
  value: string,
  perSystem: Record<string, Record<string, string>>,
): TokenCandidate[] {
  const want = normalizeColor(value);
  const systems = Object.keys(perSystem);

  if (systems.length === 0) {
    throw new Error(
      "토큰 표를 하나도 못 받았어요. 색을 맞춰 볼 기준표가 비어 있어요.\n" +
        "이 색에 맞는 토큰이 없다는 뜻이 아니라, 한 번도 확인해 보지 못했다는 뜻이에요.",
    );
  }

  const hits: Record<string, number> = {};
  for (const slug of systems) {
    for (const [ref, v] of Object.entries(perSystem[slug])) {
      if (normalizeColor(v) === want) hits[ref] = (hits[ref] ?? 0) + 1;
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
    .map((ref) => ({
      token: ref,
      matchedSystems: hits[ref],
      indistinguishableFrom: names.filter((other) => other !== ref && alwaysSame(ref, other)),
    }))
    // 일치 항목 우선 정렬, 동일하면 이름순 정렬
    .sort(
      (a, b) => b.matchedSystems - a.matchedSystems || a.token.localeCompare(b.token),
    );
}
