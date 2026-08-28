export interface KoText {
  // API 설명과 본문 문단 한글 변환
  text: Record<string, string>;
  // 슬러그를 한 줄 요약과 연결
  lead: Record<string, string>;
}

let cache: Promise<KoText> | null = null;

export function loadKo: Promise<KoText> {
  cache ??= Promise.all([import("./api"), import("./prose")]).then(([a, r]) => ({
    text: { ...a.KO_API, ...r.KO_PROSE },
    lead: r.KO_LEAD,
  }));
  return cache;
}

// 번역 있으면 번역 사용, 없으면 원문 사용. 빈 문자열은 미번역으로 처리
export function pick(ko: KoText | null, text: string | null | undefined): string {
  if (!text) return "";
  return ko?.text[text] || text;
}
