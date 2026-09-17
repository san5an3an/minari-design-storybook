import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, DemoValue, SkipCode } from "../refContract";
import { BLUEPRINT_INDEX, isBlueprintSlug, loadBlueprintDoc, type BlueprintDoc } from "./loader";
import { GROUPS } from "./demos/groups";
import { loadDemos as loadDemoModule, loadExamples } from "./demos/index";

const SECTION_OF = new Map<string, string>;
for (const [section, slugs] of Object.entries(GROUPS)) for (const s of slugs) SECTION_OF.set(s, section);

// 제목은 mdx front-matter의 title 사용, fetcher 없으면 파일 이름 사용
const TITLE = new Map(BLUEPRINT_INDEX.map((e) => [e.slug, e.title]));

// 공식 표 데이터가 태그, 설치본에 없어 표 미게시. derived, official 미선택
const API_PENDING_V7_18: BaseRefDoc["api"] = { presence: "not-imported", tables: [] };

function toDoc(raw: BlueprintDoc, examples: BaseRefExample[], master: BaseRefDoc["master"], docSource: string): BaseRefDoc {
  return {
    slug: raw.slug,
    title: raw.title,
    lead: null, // 필드 6, 8, mdx 첫 문단 자르는 규칙 미정
    leadFormat: null,
    group: SECTION_OF.get(raw.slug) ?? null,
    docHref: null, // 필드 8, 사이트 주소 형식 파악 불가
    docSource, // mdx와 packages/core/src가 blob sha1 같을 때만 태그 경로 사용
    examples,
    emptyReason: examples.length ? null : "official-none",
    master,
    prose: [], // 필드 6, 섹션별 포함 여부 원소 파악 불가
    parts: { presence: "absent-in-official", columns: [], rows: [] }, // 필드 6, 하위 컴포넌트 표 섹션 0
    api: API_PENDING_V7_18,
    tokenGroup: null, // 필드 8, 대응 파악 불가
  };
}

export const blueprintAdapter: BaseRefAdapter = {
  INDEX: BLUEPRINT_INDEX.map((e) => ({ slug: e.slug, title: e.title })),
  GROUPS,
  TITLE,
  isSlug: isBlueprintSlug,
  loadDoc(slug) {
    const doc = loadBlueprintDoc(slug);
    const ex = loadExamples(slug);
    if (!doc || !ex) return null;
    return Promise.all([doc, ex]).then(([raw, m]) =>
      toDoc(raw, m.EXAMPLES as BaseRefExample[], m.MASTER as BaseRefDoc["master"], m.DOC_SOURCE),
    );
  },
  loadDemos(slug) {
    const p = loadDemoModule(slug);
    if (!p) return null;
    return p.then((m) => ({
      demos: m.DEMOS as Record<string, DemoValue>,
      skipped: Object.fromEntries(
        Object.entries(m.SKIPPED).map(([k, v]) => [k, { code: v.code as SkipCode, detail: v.detail }]),
      ),
    }));
  },
  // 필드 8, 대표 3종 모두 공급자 없음. 색은 CSS 변수라 공급자로 옮겨지지 않음
  Provider: ({ children }) => children,
  // mountTheme는 heroui와 동일 시간 스코프
  mountTheme(_system, _mode, doc) {
    let alive = true;
    let node: HTMLStyleElement | null = null;
    import("./theme/blueprint-styles.json").then((m) => {
      if (!alive) return;
      node = doc.createElement("style");
      node.dataset.baseMount = "blueprint:blueprint-styles";
      node.textContent = String(m.default);
      doc.head.appendChild(node);
    }).catch( => { /* 못 실으면 blueprint가 스타일 없이 즉시 렌더링 */ });
    return  => {
      alive = false;
      node?.remove;
    };
  },
};
