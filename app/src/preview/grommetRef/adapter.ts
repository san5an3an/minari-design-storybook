import * as React from "react";
import type { BaseRefAdapter, BaseRefDoc, BaseRefExample, BaseRefProviderProps, DemoValue, SkipCode } from "../refContract";
import INDEX_JSON from "./index.json";
// 생성기 처리 실패 목록 skippedKeys, Master 판별용
import MANIFEST from "./demos/_manifest.json";
// 템플릿 동적 import 금지. 문서는 _docs.ts, 예제 _load.ts 목록만 호출
import { DOCS } from "./_docs";
import { LOAD } from "./demos/_load";

import { fillApi } from "../derivedApi";
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

// grommet 기본형 라벨. 소문자 비교로 찾기
const MASTER_MARKS = ["basic", "simple", "default"] as const;

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

  let master = raw.master;
  const skippedKeys = manifest.slugs[raw.slug]?.skippedKeys ?? {};
  const standable = (e: BaseRefExample) =>
    e.kind === "example"
    && !(e.key in skippedKeys)
    && !RUNTIME_UNAVAILABLE[`${raw.slug}#${e.key.split("#").pop ?? e.key}`]
    && !RUNTIME_UNAVAILABLE[`${raw.slug}#${e.key}`];
  const marked = MASTER_MARKS
    .map((want) => examples.find((e) => e.name.trim.toLowerCase === want && standable(e)))
    .find((e) => e !== undefined);
  if (marked) {
    master = { rule: "official-mark", key: marked.key, reason: null };
  } else {
    const genSkip = master.key ? skippedKeys[master.key] : undefined;
    if (master.key && genSkip) {
      const first = examples.find((e) => e.key === master.key);
      master = { rule: master.rule, key: null, reason: `공식 문서 순서 첫 예제 「${first?.name ?? master.key}」를 세우지 못했어요.` };
    }
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

const _INFINITE_GRID =
  "공식 스토리가 항목 2,000개를 창(window) 기준으로 계속 더 불러와요. 스토리북 캔버스와 달리 "
  + "이 예시는 바닥이 늘 보여서 멈추지 않고 `Maximum update depth exceeded`(React #185)로 돌아요. "
  + "공식 코드는 그대로 두고, 깨진 채 돌리는 대신 까닭을 적어요.";

// 미생성 슬러그#예제키 사례, 현재 2건 동일 원인
const RUNTIME_UNAVAILABLE: Record<string, string> = {
  "infinitescroll#GridInfiniteScroll": _INFINITE_GRID,
  "infinitescroll#GridWithShow": _INFINITE_GRID,
};

export const grommetAdapter: BaseRefAdapter = {
  INDEX,
  GROUPS,
  TITLE,
  isSlug: (slug) => SLUGS.has(slug),
  loadDoc(slug) {
    const f = SLUGS.has(slug) ? DOCS[slug] : undefined;
    if (!f) return null;
    // 표에 없는 필드는 설치된 패키지 타입에서 채우기. 규칙은 derivedApi.ts에 있음
    return f.then(async (m) => {
      const doc = toDoc(m.default as RawDoc);
      return { ...doc, api: await fillApi("grommet", doc.slug, doc.title, doc.api) };
    });
  },
  loadDemos(slug) {
    // 템플릿 동적 import 금지, demos/_src는 명시 목록 LOAD만 호출
    const f = SLUGS.has(slug) ? LOAD[slug] : undefined;
    return f
      ? f.then((m) => {
          const demos = { ...(m.demos as Record<string, DemoValue>) };
          const skipped = {
            ...(m.skipped as Record<string, { code: SkipCode; detail: string }>),
          };
          for (const key of Object.keys(demos)) {
            const why = RUNTIME_UNAVAILABLE[`${slug}#${key.split("#").pop ?? key}`]
              ?? RUNTIME_UNAVAILABLE[`${slug}#${key}`];
            if (!why) continue;
            delete demos[key];
            skipped[key] = { code: "runtime-unavailable", detail: why };
          }
          return { demos, skipped };
        })
      : null;
  },
  Provider: GrommetRefProvider,
};
