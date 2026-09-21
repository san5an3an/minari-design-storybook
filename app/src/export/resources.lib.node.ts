import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { libSpecFor } from "./lib/registry";
import { repoRoot } from "./resources.node";
import type { ExportAxis, ExportResources, RenderArgs } from "./types";

// 01-cobalt를 Cobalt로 변환. 같은 명명 규칙 적용
function systemNameOf(slug: string): string {
  const bare = slug.replace(/^\d+-/, "");
  return bare.charAt(0).toUpperCase + bare.slice(1);
}

export async function allowedLibComponents(baseKey: string): Promise<string[]> {
  const spec = libSpecFor(baseKey);
  const dir = path.join(await repoRoot, "app", "src", "preview", spec.refDir);
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile && e.name.endsWith(".json"))
    .map((e) => e.name.slice(0, -".json".length));
}

export async function loadLibResources(
  slug: string,
  baseKey: string,
  component: string,
): Promise<ExportResources> {
  const spec = libSpecFor(baseKey);
  const root = await repoRoot;

  const themeFile = `theme.${spec.themeExt ?? "ts"}`;

  const [vars, themeSource, refRaw] = await Promise.all([
    readFile(path.join(root, "generated", slug, "vars.css"), "utf8"),
    readFile(path.join(root, "generated", slug, "base", spec.themeDir, themeFile), "utf8"),
    readFile(path.join(root, "app", "src", "preview", spec.refDir, `${component}.json`), "utf8"),
  ]);

  if (spec.notComponents?.includes(component)) {
    throw new Error(
      `'${baseKey}' 의 '${component}' 는 공식 문서에는 있지만 컴포넌트가 아니에요: ` +
        `내보낼 수 있는 것이 없어요.`,
    );
  }

  const ref = JSON.parse(refRaw) as { title?: string };
  const { componentName, props, dropped } = spec.parse(JSON.parse(refRaw));

  // 이름에 쓸 수 있는 글자인지 확인
  const USABLE = /^[A-Za-z_$][A-Za-z0-9_$]*$/;
  if (typeof componentName !== "string" || !USABLE.test(componentName.trim)) {
    throw new Error(
      `'${baseKey}' 의 '${component}' 는 컴포넌트 이름을 못 찾았어요: ` +
        `공식 메타가 컴포넌트 문서가 아닌 것 같아요(예: 목록 페이지). 내보낼 수 있는 이름이 없어요.`,
    );
  }

  // 첨부 파일 전체 텍스트로 읽기. 누락 시 색상만 조용히 달라지는 문제 있음
  const wanted = [...spec.extras, ...(spec.compiledTheme?.(slug) ?? [])];

  const extras = await Promise.all(
    wanted.map(async (e) => ({
      to: e.to,
      why: e.why,
      text: await readFile(path.join(root, e.from), "utf8"),
    })),
  );

  const axes: ExportAxis[] = props.map((p) => ({
    prop: p.prop,
    kind: "variant",
    values: p.values,
    default: p.default,
  }));

  return {
    source: {
      slug,
      systemName: systemNameOf(slug),
      baseKey,
      component,
      componentTitle: ref.title ?? componentName,
    },
    vars,
    // 구조에는 있으나 라이브러리에 없는 값은 빈 문자열 처리
    componentCss: "",
    axes,
    partNames: [],
    stateNames: [],
    exportName: componentName,
    componentSource: "",
    cxSource: "",
    renderComponent: (_args: RenderArgs): string => {
      // 라이브러리 경로 호출 시 예외 발생. impl 0인 React 미구현이라 렌더 수단이 없음
      throw new Error(
        `'${baseKey}' 는 라이브러리 길이라 정적 렌더가 없어요. ` +
          `HTML 형식은 이 베이스에서 낼 수 없어요. 런타임이 없으면 토큰이 안 실려요.`,
      );
    },
    lib: {
      title: spec.title,
      packages: spec.packages,
      // LibResources.importFrom 값을 항상 문자열로 통일 처리
      importFrom: typeof spec.importFrom === "function"
        ? spec.importFrom(component)
        : spec.importFrom,
      themeSource,
      themeExt: spec.themeExt ?? "ts",
      providerSource: spec.provider,
      extras,
      componentName,
      props,
      dropped,
    },
  };
}
