import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, DemoValue, SkipCode } from "../refContract";
import { DERIVED_REASON, pickTable, type PropTable } from "../derivedApi";
import { BLUEPRINT_INDEX, isBlueprintSlug, loadBlueprintDoc, type BlueprintDoc } from "./loader";
import { GROUPS } from "./demos/groups";
import { loadDemos as loadDemoModule, loadExamples } from "./demos/index";

const SECTION_OF = new Map<string, string>;
for (const [section, slugs] of Object.entries(GROUPS)) for (const s of slugs) SECTION_OF.set(s, section);

function rootVarsOf(shapeCss: string): string {
  const m = shapeCss.match(/\.blueprint-ref-scope\s*\{([^}]*)\}/);
  if (!m) return "";
  const decls = m[1].split(";").map((d) => d.trim).filter(Boolean);
  if (!decls.length || !decls.every((d) => d.startsWith("--"))) return "";
  return `:root{${decls.join(";")}}`;
}

const BP_DEFAULT_FOREGROUND_FIX = `
.blueprint-ref-scope .bp6-intent-default {
  --bp-intent-default-foreground: var(--semantic-fg-on-neutral-default);
}
`;

const BP_DARK = "bp6-dark";

function isDarkSurface(mode?: string): boolean {
  const m = mode ?? (typeof document !== "undefined"
    ? document.documentElement.getAttribute("data-theme") ?? "light"
    : "light");
  return m !== "light";
}

function withDocsData(demos: Record<string, DemoValue>): Record<string, DemoValue> {
  const out: Record<string, DemoValue> = {};
  for (const [key, value] of Object.entries(demos)) {
    if (typeof value !== "function") { out[key] = value; continue; }
    const Orig = value as React.ComponentType<Record<string, unknown>>;
    const Wrapped = (props: Record<string, unknown>) => {
      return React.createElement(Orig, { data: { themeName: isDarkSurface ? BP_DARK : "" }, ...props });
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

let apiTables: Promise<Record<string, PropTable>> | null = null;

// blueprint.json 한 번만 읽기. 없으면 빈 표로 처리, 생성기 안 돌린 트리임
function loadApiTables: Promise<Record<string, PropTable>> {
  apiTables ??= import("../../vendor-types/prop-tables/blueprint.json")
    .then((m) => (m.default as { components?: Record<string, PropTable> }).components ?? {})
    .catch( => ({}));
  return apiTables;
}

function apiFor(slug: string, title: string, tables: Record<string, PropTable>): BaseRefDoc["api"] {
  const t = pickTable(tables, slug, title);
  if (!t) return API_NOT_FOUND;
  return {
    presence: "derived",
    reason: DERIVED_REASON,
    tables: [{ name: t.name, columns: t.columns, rows: t.rows }],
  };
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
  Provider: ({ mode, children }) =>
    React.createElement(
      "div",
      { className: isDarkSurface(mode) ? `blueprint-ref-scope ${BP_DARK}` : "blueprint-ref-scope" },
      children,
    ),
  mountTheme(system, _mode, doc) {
    let alive = true;
    const nodes: HTMLStyleElement[] = [];
    Promise.all([
      import("./theme/blueprint-styles.json"),
      import(`../../systems/css/${system.slug}/_theme-blueprint.json`),
    ]).then(([shape, theme]) => {
      if (!alive) return;
      // 특정 줄만 예외 처리. 남은 선언이 다크 테마 크롬 규칙 16개와 계속 충돌
      const themeCss = String(theme.default)
        .replace(/^[^\S\n]*--bp-intent-default-foreground[^\n;]*;[^\S\n]*$\n?/m, "");
      const scopedTheme = themeCss.replace(/:root\s*\{/, ".blueprint-ref-scope {")
        + BP_DEFAULT_FOREGROUND_FIX;
      for (const [id, css] of [
        ["blueprint-styles", shape.default],
        ["blueprint-vars-root", rootVarsOf(String(shape.default))],
        // 시스템 색을 :root, 래퍼 양쪽에 적용, blueprint보다 뒤 순서임
        ["blueprint-theme", `${themeCss}\n${scopedTheme}`],
      ] as const) {
        const el = doc.createElement("style");
        el.dataset.baseMount = `blueprint:${id}`;
        el.textContent = String(css);
        doc.head.appendChild(el);
        nodes.push(el);
      }
    }).catch( => { /* 못 실으면 blueprint가 스타일 없이 즉시 렌더링 */ });
    return  => {
      alive = false;
      for (const el of nodes) el.remove;
    };
  },
};
