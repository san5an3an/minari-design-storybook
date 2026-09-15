import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import INDEX_JSON from "./index.json";
// 생성기 처리 실패 목록 skippedKeys, Master 판별용
import MANIFEST from "./demos/_manifest.json";
// 템플릿 동적 import 금지. 문서는 _docs.ts, 예제 _load.ts 목록만 호출
import { DOCS } from "./_docs";
import { LOAD } from "./demos/_load";

type RawExample = Omit<BaseRefExample, "description" | "descFormat" | "iframeHeight" | "args" | "axis"> & {
  export?: string; file?: string; id?: string; code?: string;
  args: Record<string, unknown> | null;
  skip: { code: string; detail: string } | null;
};
type RawDoc = Omit<BaseRefDoc, "examples"> & { examples: RawExample[]; embeddedNotImported: unknown[] };
type Manifest = { slugs: Record<string, { ok: number; skipped: number; skippedKeys?: Record<string, string> }> };

const INDEX = INDEX_JSON.components.map((c) => ({ slug: c.slug, title: c.title }));
// 사이드바 분류는 사이트 structure.js 섹션 기준, 순서는 공식 그대로 유지
const GROUPS: Record<string, string[]> = INDEX_JSON.groups;
const TITLE = new Map(INDEX.map((c) => [c.slug, c.title]));
const SLUGS = new Set(INDEX.map((c) => c.slug));
const manifest = MANIFEST as Manifest;

function toDoc(raw: RawDoc): BaseRefDoc {
  const examples: BaseRefExample[] = raw.examples.map((ex) => ({
    key: ex.key,
    name: ex.name,
    // 필드 5. storybook title에 ## 층 없어 전부 null임
    axis: null,
    kind: ex.kind,
    description: null,
    descFormat: null,
    source: ex.source,
    stage: ex.stage,
    iframeHeight: null,
    providerProps: ex.providerProps,
    // args 합성은 storybookCompose가 런타임에 처리
    args: null,
  }));

  // Master 문서 순서 첫째 항목을 생성기가 못 만들면 둘째로 올리지 않고 사유만 표시
  let master = raw.master;
  const genSkip = master.key ? manifest.slugs[raw.slug]?.skippedKeys?.[master.key] : undefined;
  if (master.key && genSkip) {
    const first = examples.find((e) => e.key === master.key);
    master = { rule: master.rule, key: null, reason: `공식 문서 순서 첫 예제 「${first?.name ?? master.key}」를 세우지 못했어요.` };
  }

  return {
    slug: raw.slug,
    title: raw.title,
    lead: raw.lead,
    leadFormat: raw.leadFormat,
    group: raw.group,
    docHref: raw.docHref,
    docSource: raw.docSource,
    examples,
    emptyReason: raw.emptyReason,
    master,
    prose: raw.prose,
    parts: raw.parts,
    api: raw.api,
    tokenGroup: raw.tokenGroup,
  };
}

const LazyProvider = React.lazy( => import("./provider"));

function GrommetRefProvider(props: BaseRefProviderProps) {
  return React.createElement(React.Suspense, { fallback: null }, React.createElement(LazyProvider, props));
}

export const grommetAdapter: BaseRefAdapter = {
  INDEX,
  GROUPS,
  TITLE,
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    const f = SLUGS.has(slug) ? DOCS[slug] : undefined;
    return f ? f.then((m) => toDoc(m.default as RawDoc)) : null;
  },
  loadDemos(slug) {
    // 템플릿 동적 import 금지, demos/_src는 명시 목록 LOAD만 호출
    const f = SLUGS.has(slug) ? LOAD[slug] : undefined;
    return f
      ? f.then((m) => ({
          demos: m.demos as Record<string, DemoValue>,
          skipped: m.skipped as Record<string, { code: SkipCode; detail: string }>,
        }))
      : null;
  },
  Provider: GrommetRefProvider,
};
