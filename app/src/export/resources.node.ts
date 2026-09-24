import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { RequestError, WiringError } from "./errors";
import * as React from "react";
import { partLabel } from "./rows";
import type { ExportAxis, ExportResources, RenderArgs } from "./types";

let cachedRoot: string | null = null;
// 라이브러리 어댑터와 경로 공유
export async function repoRoot: Promise<string> {
  if (cachedRoot) return cachedRoot;
  let dir = process.cwd;
  for (let i = 0; i < 6; i++) {
    const ok = await Promise.all([
      stat(path.join(dir, "generated")).then( => true,  => false),
      stat(path.join(dir, "app", "src", "contract")).then( => true,  => false),
    ]);
    if (ok[0] && ok[1]) {
      cachedRoot = dir;
      return dir;
    }
    const up = path.dirname(dir);
    if (up === dir) break;
    dir = up;
  }
  throw new WiringError(
    `저장소 뿌리를 못 찾았어요: '${process.cwd}' 위로 generated/ 와 app/src/contract/ 가 ` +
      `함께 있는 위치가 없어요.`,
  );
}

// 계약 값 하나. api.json 값 하나와 동일한 형태임
interface ContractProp {
  prop: string;
  kind: string;
  values: string[];
  default: string | null;
}
interface ContractPart {
  name: string;
  // 렌더링 태그 svg, div, button. 텍스트 포함 가능 여부로 구분하기
  tag: string;
}
interface Contract {
  title: string;
  props: ContractProp[];
  parts: ContractPart[];
}

async function readContract(slug: string): Promise<Record<string, Contract>> {
  const root = await repoRoot;
  const raw = await readFile(path.join(root, "app", "src", "contract", slug, "api.json"), "utf8");
  return JSON.parse(raw) as Record<string, Contract>;
}

// 요청 필터링용 전체 색상 목록
export async function allowedSlugs: Promise<string[]> {
  const entries = await readdir(path.join(await repoRoot, "generated"), { withFileTypes: true });
  return entries.filter((e) => e.isDirectory).map((e) => e.name);
}

// 해당 색상의 컴포넌트 전체
export async function allowedComponents(slug: string): Promise<string[]> {
  return Object.keys(await readContract(slug));
}

export async function allowedBases(slug: string): Promise<string[]> {
  const dir = path.join(await repoRoot, "generated", slug, "base");
  const entries = await readdir(dir, { withFileTypes: true });
  return [...entries.filter((e) => e.isDirectory).map((e) => e.name), "standalone"];
}

function systemNameOf(slug: string): string {
  const bare = slug.replace(/^\d+-/, "");
  return bare.charAt(0).toUpperCase + bare.slice(1);
}

// alert를 Alert로 변환. gen_react.py 명명 규칙과 동일한 표기임
function exportNameOf(component: string): string {
  return component.charAt(0).toUpperCase + component.slice(1);
}

export async function loadResources(
  slug: string,
  baseKey: string,
  component: string,
): Promise<ExportResources> {
  const { renderToStaticMarkup } = await import("react-dom/server");

  const contract = await readContract(slug);
  const api = contract[component];
  if (!api) {
    throw new RequestError(`'${slug}' 의 계약에 '${component}' 가 없어요.`);
  }

  const exportName = exportNameOf(component);
  const root = await repoRoot;
  const compDir = path.join(root, "react", slug, "components");

  const [vars, componentCss, componentSource, cxSource] = await Promise.all([
    readFile(path.join(root, "generated", slug, "vars.css"), "utf8"),
    readFile(path.join(root, "systems", slug, "components", component, `${component}.css`), "utf8"),
    readFile(path.join(compDir, `${exportName}.tsx`), "utf8"),
    readFile(path.join(compDir, "cx.ts"), "utf8"),
  ]);

  // 값 있는 프롭만 적용, kind 무관. attr도 값 유무 혼재
  const axes: ExportAxis[] = api.props
    .filter((p) => p.values.length > 0)
    .map((p) => ({ prop: p.prop, kind: p.kind, values: p.values, default: p.default }));
  const stateNames = api.props.filter((p) => p.values.length === 0).map((p) => p.prop);
  const partNames = api.parts.map((p) => p.name);
  // 태그로 텍스트 수용 가능 여부 판별. svg는 DOM엔 남아도 화면엔 안 보임
  const textless = new Set(api.parts.filter((p) => p.tag === "svg").map((p) => p.name));

  const mod = (await import(
    // webpackInclude: /\.tsx$/
    `../../../react/${slug}/components/${exportName}.tsx`
  )) as Record<string, React.ElementType>;

  const Root = mod[exportName];
  if (!Root) {
    // export 누락은 생성물 오류로 처리
    throw new WiringError(`react/${slug}/components/${exportName}.tsx 에 '${exportName}' export 가 없어요.`);
  }

  const acceptsChildren = (: boolean => {
    try {
      renderToStaticMarkup(React.createElement(Root, {}, "글자"));
      return true;
    } catch {
      return false;
    }
  });

  const partTakesText = new Map<string, boolean>(
    partNames.map((name) => {
      const Part = mod[name];
      // 모듈에 없는 하위 컴포넌트는 판별 대상 아님. 선택 시 renderComponent에서 오류 발생
      if (!Part) return [name, false] as const;
      try {
        renderToStaticMarkup(React.createElement(Part, {}, "글자"));
        return [name, true] as const;
      } catch {
        return [name, false] as const;
      }
    }),
  );

  const renderComponent = ({ props, parts, text }: RenderArgs): string => {
    const children =
      parts.length > 0
        ? parts.map((p, i) => {
            const Part = mod[p];
            // 계약-모듈 드리프트 도달. assertSelection 검증 후 도달하는 내부 배선 오류임
            if (!Part) throw new WiringError(`'${p}' 부품이 그 모듈에 없어요.`);
            // 본문은 rows.ts 공유해 Next 예시와 동일하게 사용
            return React.createElement(
              Part,
              { key: i },
              // svg 비표시와 void 태그 렌더링 불가 두 이유가 겹쳐 있음
              textless.has(p) || !partTakesText.get(p) ? null : partLabel(p, exportName),
            );
          })
        : text;
    // root가 자식을 못 받으면 하위 컴포넌트도 누락
    return renderToStaticMarkup(
      React.createElement(Root, props, acceptsChildren ? children : null),
    );
  };

  return {
    source: {
      slug,
      systemName: systemNameOf(slug),
      baseKey,
      component,
      componentTitle: api.title,
    },
    vars,
    componentCss,
    axes,
    partNames,
    stateNames,
    exportName,
    componentSource,
    cxSource,
    acceptsChildren,
    renderComponent,
  };
}
