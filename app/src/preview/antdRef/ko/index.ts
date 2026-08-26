export interface KoText {
  // 표와 예제 설명 한글 변환
  text: Record<string, string>;
  // 슬러그를 When To Use 문단과 연결
  when: Record<string, string>;
  // 슬러그를 한 줄 요약과 연결
  lead: Record<string, string>;
  // 원문 이름을 한글로 변환해 표시. key는 원문 그대로 사용
  names: Record<string, string>;
}

let cache: Promise<KoText> | null = null;

export function loadKo: Promise<KoText> {
  cache ??= Promise.all([
    import("./tokens"), import("./props"), import("./parts"),
    import("./examples"), import("./prose"), import("./names"),
  ]).then(([t, p, a, e, r, n]) => ({
    text: { ...t.KO_TOKENS, ...p.KO_PROPS, ...a.KO_PARTS, ...e.KO_EXAMPLES },
    when: r.KO_WHEN,
    lead: r.KO_LEAD,
    names: n.KO_NAMES,
  }));
  return cache;
}

// 번역 있으면 번역 사용, 없으면 원문 사용. 빈 문자열은 미번역으로 처리
export function pick(ko: KoText | null, text: string | null | undefined): string {
  if (!text) return "";
  return ko?.text[text] || text;
}
