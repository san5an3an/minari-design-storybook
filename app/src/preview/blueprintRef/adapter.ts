import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, DemoValue, SkipCode } from "../refContract";
import { BLUEPRINT_INDEX, isBlueprintSlug, loadBlueprintDoc, type BlueprintDoc } from "./loader";
import { GROUPS } from "./demos/groups";
import { loadDemos as loadDemoModule, loadExamples } from "./demos/index";

const SECTION_OF = new Map<string, string>;
for (const [section, slugs] of Object.entries(GROUPS)) for (const s of slugs) SECTION_OF.set(s, section);

function withDocsData(demos: Record<string, DemoValue>): Record<string, DemoValue> {
  const out: Record<string, DemoValue> = {};
  for (const [key, value] of Object.entries(demos)) {
    if (typeof value !== "function") { out[key] = value; continue; }
    const Orig = value as React.ComponentType<Record<string, unknown>>;
    const Wrapped = (props: Record<string, unknown>) => {
      const dark = typeof document !== "undefined"
        && document.documentElement.getAttribute("data-theme") === "dark";
      return React.createElement(Orig, { data: { themeName: dark ? "bp5-dark" : "" }, ...props });
    };
    Wrapped.displayName = `BlueprintDemo(${key})`;
    out[key] = Wrapped as unknown as DemoValue;
  }
  return out;
}

// 제목은 mdx front-matter의 title 사용, fetcher 없으면 파일 이름 사용
const TITLE = new Map(BLUEPRINT_INDEX.map((e) => [e.slug, e.title]));

const API_NOT_FOUND: BaseRefDoc["api"] = {
  presence: "not-imported",
  reason: "공식 표 데이터(docs-data 컴파일 산출)가 태그·설치본에 없고, 설치본 타입 선언에도 "
    + "이 이름의 컴포넌트가 없어요. 지어내지 않았어요.",
  tables: [],
};

type PropTable = { name: string; columns: string[]; rows: string[][] };
let apiTables: Promise<Record<string, PropTable>> | null = null;

// blueprint.json 한 번만 읽기. 없으면 빈 표로 처리, 생성기 안 돌린 트리임
function loadApiTables: Promise<Record<string, PropTable>> {
  apiTables ??= import("../../vendor-types/prop-tables/blueprint.json")
    .then((m) => (m.default as { components?: Record<string, PropTable> }).components ?? {})
    .catch( => ({}));
  return apiTables;
}

// 문서 slug로 컴포넌트 이름 도출. 규칙과 불일치 시 이름이 어긋나는 문제가 있음
function apiFor(slug: string, title: string, tables: Record<string, PropTable>): BaseRefDoc["api"] {
  const pascal = (x: string) => x.split(/[-_ ]+/).filter(Boolean)
    .map((w) => w[0].toUpperCase + w.slice(1)).join("");
  const cands: string[] = [title, title.replace(/\s+/g, ""), pascal(slug), slug].filter(Boolean);
  for (const c of cands) {
    const t = tables[c];
    if (t?.rows.length) {
      return {
        presence: "derived",
        reason: "공식 문서에 표 원천이 없어서 설치된 패키지의 타입 선언(.d.ts) 에서 뽑았어요. "
          + "그 컴포넌트가 상속받는 프롭까지 따라갑니다. "
          + "설명·기본값은 선언에 달린 JSDoc 이라 공식 산문과 문구가 다를 수 있고, `@default` 태그가 없는 프롭은 기본값 열이 비어요. 없는 게 아니라 타입이 안 적은 거예요. "
          + "타입이 선언하지 않는 것(문서에만 있는 프롭·런타임으로만 받는 값)은 여기 없어요.",
        tables: [{ name: t.name, columns: t.columns, rows: t.rows }],
      };
    }
  }
  return API_NOT_FOUND;
}

function toDoc(raw: BlueprintDoc, examples: BaseRefExample[], master: BaseRefDoc["master"], docSource: string, api: BaseRefDoc["api"]): BaseRefDoc {
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
    api,
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
    return Promise.all([doc, ex, loadApiTables]).then(([raw, m, tables]) =>
      toDoc(raw, m.EXAMPLES as BaseRefExample[], m.MASTER as BaseRefDoc["master"], m.DOC_SOURCE,
            apiFor(raw.slug, raw.title, tables)),
    );
  },
  loadDemos(slug) {
    const p = loadDemoModule(slug);
    if (!p) return null;
    return p.then((m) => ({
      demos: withDocsData(m.DEMOS as Record<string, DemoValue>),
      skipped: {
        ...Object.fromEntries(
          Object.entries(m.SKIPPED).map(([k, v]) => [k, { code: v.code as SkipCode, detail: v.detail }]),
        ),
        ...Object.fromEntries(
          Object.entries(m.PENDING).map(([k, v]) => [k, {
            code: (v.reason === "unresolved-local-module" ? "local-module-missing" : "not-an-example") as SkipCode,
            detail: v.detail,
          }]),
        ),
      },
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
