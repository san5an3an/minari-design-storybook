import { parserFor, DEFAULT_PARSER } from "./parse/registry";
import type { ContractIndex, IngestResources } from "./types";

async function contractFor(slug: string): Promise<ContractIndex> {
  const mod = await import(`@/contract/${slug}/api.json`);
  return (mod.default ?? mod) as ContractIndex;
}

function shownSlug: string | null {
  return /^#\/[^/]+\/([^/]+)/.exec(location.hash)?.[1] ?? null;
}

async function tokensFor(slug: string): Promise<Record<string, Record<string, string>>> {
  const shown = shownSlug;
  if (shown !== null && shown !== slug) {
    // 현재 작동 중인 가드. shownSlug 참고
    throw new Error(
      `\`${slug}\` 의 토큰을 물었는데 화면에 그려진 것은 \`${shown}\` 이에요.\n` +
        `이 구현은 지금 그려진 값밖에 못 읽습니다: 다른 색의 값인 척 돌려주면\n` +
        `«20색을 봤다» 가 거짓이 됩니다. 20색을 보려면 서버 라우트가 필요해요.`,
    );
  }

  const mod = (await import(`../../../generated/${slug}/mapping.json`)) as {
    default?: Record<string, Record<string, string>>;
  } & Record<string, unknown>;
  const mapping = (mod.default ?? mod) as Record<string, Record<string, string>>;

  // 모드 이름 기준은 mapping.json 최상위 키. data-theme도 동일 값 사용
  const mode = document.documentElement.dataset.theme ?? "light";
  const names = mapping[mode];
  if (!names) {
    throw new Error(
      `모드 \`${mode}\` 의 토큰 표가 \`generated/${slug}/mapping.json\` 에 없어요.\n` +
        `그 파일에 있는 모드: ${Object.keys(mapping).join(" · ")}`,
    );
  }

  const cs = getComputedStyle(document.documentElement);
  const table: Record<string, string> = {};
  let missing = 0;
  for (const full of Object.keys(names)) {
    if (!full.startsWith("semantic.")) continue; // base.* 원자값은 역매핑에서 제외
    const ref = full.slice("semantic.".length); // bg.brand.default, 계약이 쓰는 형태
    const v = cs.getPropertyValue("--" + full.replace(/\./g, "-")).trim;
    if (v) table[ref] = v;
    else missing += 1;
  }

  if (Object.keys(table).length === 0) {
    // 빈 표와 읽기 실패를 구분해 반환
    throw new Error(
      `시맨틱 토큰을 하나도 못 읽었어요 (이름은 ${Object.keys(names).length}개 받았는데 값이 0개).\n` +
        `스타일시트가 아직 안 붙었을 수 있어요. 「이 시스템에 토큰이 없다」는 뜻이 아닙니다.`,
    );
  }
  if (missing > 0) {
    // 부분만 읽은 항목도 허용해 기록 유지
    console.warn(
      `[ingest] ${slug}/${mode}: 이름 ${Object.keys(names).length}개 중 값이 빈 것 ${missing}개, ` +
        `그 색이 안 쓰는 토큰일 수 있어요.`,
    );
  }

  // 키를 슬러그 대신 현재 모드로 고정. 20색 척하면 매칭 카운트를 잘못 읽는 문제임
  return { [mode]: table };
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
  parseFragments: (source: string) => parserFor(DEFAULT_PARSER).parseFragments(source),
  contractFor,
  tokensFor,
  hash,
};
