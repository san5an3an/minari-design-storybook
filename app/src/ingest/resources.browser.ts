import { parseFragments } from "./parse/html";
import type { ContractIndex, IngestResources } from "./types";

async function contractFor(slug: string): Promise<ContractIndex> {
  const mod = await import(`@/contract/${slug}/api.json`);
  return (mod.default ?? mod) as ContractIndex;
}

async function tokensFor(_slug: string): Promise<Record<string, Record<string, string>>> {
  const cs = getComputedStyle(document.documentElement);
  const mode = document.documentElement.dataset.theme || ":root";
  const table: Record<string, string> = {};

  // 스타일시트에서 --semantic-* 이름 수집. API가 나열 못 해 직접 조회로 얻음
  for (const sheet of Array.from(document.styleSheets)) {
    let rules: CSSRuleList;
    try {
      rules = sheet.cssRules;
    } catch {
      // 다른 출처 스타일시트는 CORS 제약으로 못 읽어 건너뜀. 없는 것 취급이 아니라 건너뛰는 것뿐임
      continue;
    }
    for (const rule of Array.from(rules)) {
      if (!(rule instanceof CSSStyleRule)) continue;
      for (const prop of Array.from(rule.style)) {
        if (prop.startsWith("--semantic-")) {
          const v = cs.getPropertyValue(prop).trim;
          if (v) table[prop] = v;
        }
      }
    }
  }

  if (Object.keys(table).length === 0) {
    // 빈 표와 읽기 실패 구분해 처리
    throw new Error(
      "시맨틱 토큰을 하나도 못 읽었어요. 스타일시트가 아직 안 붙었거나 다른 출처일 수 있어요. " +
        "「이 시스템에 토큰이 없다」는 뜻이 아닙니다.",
    );
  }

  // 키를 슬러그 대신 현재 시스템으로 고정. 20색 척하면 매칭 카운트를 잘못 읽는 문제임
  return { [mode]: table, __only: table } as Record<string, Record<string, string>>;
}

// 내용 해시, 같은 파일 두 번 넣어도 같은 초안으로 처리
function hash(text: string): string {
  let h = 0x811c9dc5;
  for (let i = 0; i < text.length; i++) {
    h ^= text.charCodeAt(i);
    h = Math.imul(h, 0x01000193) >>> 0;
  }
  return h.toString(16).padStart(8, "0") + text.length.toString(16);
}

export const browserResources: IngestResources = {
  parseFragments,
  contractFor,
  tokensFor,
  hash,
};
