import { rankComponents } from "./match/shapes";
import { matchToken, normalizeColor } from "./match/tokens";
import {
  INGEST_KIND,
  INGEST_VERSION,
  type Draft,
  type Fragment,
  type IngestResources,
  type Unresolved,
} from "./types";

// 목업에서 style 속성과 인라인 style 태그 모두의 색상값 수집
function collectColors(html: string): string[] {
  const found = new Set<string>;
  for (const m of html.matchAll(/#[0-9a-fA-F]{3}(?:[0-9a-fA-F]{3})?\b/g)) {
    found.add(normalizeColor(m[0]));
  }
  return [...found].sort;
}

function flatten(f: Fragment): Fragment[] {
  return [f, ...f.children.flatMap(flatten)];
}

export interface ExtractInput {
  filename: string;
  html: string;
  // 기준 시스템의 계약, 토큰 표 선택. 매칭에만 사용, 색과 결부하지 않음
  slug: string;
  // 토큰 역조회에 사용할 시스템 목록. 20색을 모두 포함해야 구분 가능 검증이 의미 있음
  allSlugs: string[];
  // 표시할 토큰 표의 기준 모드 선택. 모드를 섞으면 유일성 보장이 없음
  mode?: string;
}

export async function extract(input: ExtractInput, res: IngestResources): Promise<Draft> {
  const { filename, html, slug, allSlugs, mode = ":root" } = input;

  const fragments = res.parseFragments(html);
  const contract = await res.contractFor(slug);

  // 토큰 표는 시스템별 모음, 모드 하나만 표시. 합치면 중복 집계로 유일성이 55%로 낮음
  const perSystem: Record<string, Record<string, string>> = {};
  for (const s of allSlugs) {
    const byMode = await res.tokensFor(s);
    if (byMode[mode]) perSystem[s] = byMode[mode];
  }

  const candidates: Draft["candidates"] = {};
  const unresolved: Unresolved[] = [];

  for (const f of fragments) {
    const ranked = rankComponents(f, contract);
    candidates[f.id] = ranked;

    if (ranked.length === 0) {
      // 후보 없음과 탐지 결과 없음을 구분해 기록
      unresolved.push({
        about: "component",
        target: f.id,
        question: `\`<${f.tag} class="${f.classes.join(" ")}">\`. 닮은 것을 못 찾았어요. 어느 컴포넌트인가요?`,
        options: Object.keys(contract).sort,
        answer: null,
      });
      continue;
    }

    const top = ranked[0];
    if (top.cannotTellFromMarkup.length > 0) {
      unresolved.push({
        about: "component",
        target: f.id,
        question:
          `\`<${f.tag}>\` 이 \`${[top.component, ...top.cannotTellFromMarkup.map((s) => s.match(/`([^`]+)`/)?.[1] ?? "")].filter(Boolean).join("` 과 `")}\` ` +
          `사이에서 안 갈려요. 어느 쪽인가요?`,
        options: ranked.filter((c) => c.score >= top.score * 0.8).map((c) => c.component),
        answer: null,
      });
    }
  }

  // 색을 토큰 후보로 연결. 판단 불가능한 항목만 질문으로 표시
  const tokens: Draft["tokens"] = {};
  for (const v of collectColors(html)) {
    const cands = matchToken(v, perSystem);
    if (cands.length === 0) continue; // 토큰 미등록 색상
    tokens[v] = cands;
    if (cands.length > 1 || cands[0].indistinguishableFrom.length > 0) {
      const all = [cands[0].token, ...cands[0].indistinguishableFrom, ...cands.slice(1).map((c) => c.token)];
      unresolved.push({
        about: "token",
        target: v,
        question: `\`${v}\` 는 어느 토큰인가요? (${[...new Set(all)].length}개 후보)`,
        options: [...new Set(all)],
        answer: null,
      });
    }
  }

  // 이름은 마크업에 나타나지 않게 항상 숨김 처리
  unresolved.push({
    about: "text",
    target: "name",
    question: "이 컴포넌트를 뭐라고 부를까요?",
    options: [],
    answer: null,
  });

  const now = new Date.toISOString;
  const hash = res.hash(html);
  return {
    kind: INGEST_KIND,
    version: INGEST_VERSION,
    // id에 해시 사용. 시각 포함 시 입력마다 새 초안임
    id: hash.slice(0, 12),
    createdAt: now,
    updatedAt: now,
    source: { filename, hash, bytes: new TextEncoder.encode(html).length },
    name: null,
    fragments,
    candidates,
    tokens,
    unresolved,
    selected: null,
    // 기본값 "match" 지정. 72종 중 하나로 처리하며 create 자동 전환 제외
    mode: "match",
    // 마크업에서 자동 추출 안 되는 항목, 등록 전 수동 입력 필요
    needsHuman: [
      "설명 산문: 이 컴포넌트가 무엇이고 언제 쓰는가 (계약의 SUMMARY·section 설명)",
      "조건: «…하지 않는다» 류의 사용 규칙 (계약의 condition)",
      "옵션 값 목록: variant·tone·size 가 시스템마다 다름 (목업에는 한 시스템 것만 보임)",
    ],
  };
}

// 프래그먼트별 포함 요소 수, 큰 프래그먼트와 작은 프래그먼트 구분 기준
export function sizeOf(f: Fragment): number {
  return flatten(f).length;
}
