import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { libSpecFor, type LibProp } from "./lib/registry";
import { repoRoot } from "./resources.node";
import type { ExportAxis, ExportResources, RenderArgs } from "./types";

// 01-cobalt를 Cobalt로 변환. 같은 명명 규칙 적용
function systemNameOf(slug: string): string {
  const bare = slug.replace(/^\d+-/, "");
  return bare.charAt(0).toUpperCase + bare.slice(1);
}

type PropUnions = {
  components?: Record<string, Record<string, string[]>>;
  // children을 안 받는 컴포넌트 이름
  noChildren?: string[];
  // 컴포넌트별 필수 프롭과 위치 매핑, null이면 타입에서 읽기 실패
  required?: Record<string, { prop: string; placeholder: string | null }[]>;
  // 컴포넌트 on/off boolean 프롭, 상태 필드가 참조
  states?: Record<string, string[]>;
};
const unionsCache = new Map<string, PropUnions | null>;

async function loadPropUnions(baseKey: string): Promise<PropUnions | null> {
  if (unionsCache.has(baseKey)) return unionsCache.get(baseKey) ?? null;
  let parsed: PropUnions | null = null;
  try {
    const p = path.join(await repoRoot, "app", "src", "vendor-types", "prop-unions", `${baseKey}.json`);
    parsed = JSON.parse(await readFile(p, "utf8")) as PropUnions;
  } catch {
    parsed = null; // 미생성이거나 베이스 없으면 축을 빈 채로 유지
  }
  unionsCache.set(baseKey, parsed);
  return parsed;
}

async function unionPropsFor(baseKey: string, componentName: string): Promise<LibProp[]> {
  const u = await loadPropUnions(baseKey);
  const axes = u?.components?.[componentName];
  if (!axes) return [];
  return Object.entries(axes)
    .filter(([, values]) => values.length > 1)
    // 기본값은 타입상 불명확해 null로 지정. 창에는 기본 표시가 붙지 않음
    .map(([prop, values]) => ({ prop, values, default: null }));
}

export async function allowedLibComponents(baseKey: string): Promise<string[]> {
  const dir = await refJsonDir(libSpecFor(baseKey).refDir);
  if (!dir) return [];
  const entries = await readdir(dir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile && e.name.endsWith(".json"))
    .map((e) => e.name.slice(0, -".json".length));
}

async function refJsonDir(refDir: string): Promise<string | null> {
  const base = path.join(await repoRoot, "app", "src", "preview", refDir);
  for (const dir of [base, path.join(base, "contract")]) {
    try {
      const entries = await readdir(dir, { withFileTypes: true });
      if (entries.some((e) => e.isFile && e.name.endsWith(".json"))) return dir;
    } catch { /* 없는 디렉토리는 다음 후보로 전달 */ }
  }
  return null;
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
    // 경로 위치 통일. refJsonDir가 목록을 낸 디렉토리에서 읽어 목록과 본문 일치 보장
    refJsonDir(spec.refDir).then((dir) => {
      if (!dir) throw new Error(`'${baseKey}' 의 참조 문서가 없어요.`);
      return readFile(path.join(dir, `${component}.json`), "utf8");
    }),
  ]);

  if (spec.notComponents?.includes(component)) {
    throw new Error(
      `'${baseKey}' 의 '${component}' 는 공식 문서에는 있지만 컴포넌트가 아니에요: ` +
        `내보낼 수 있는 것이 없어요.`,
    );
  }

  const ref = JSON.parse(refRaw) as { title?: string };
  const { componentName, props: parsedProps, dropped } = spec.parse(JSON.parse(refRaw));

  const props: LibProp[] = parsedProps.length > 0
    ? parsedProps
    : await unionPropsFor(baseKey, componentName);

  const unions = await loadPropUnions(baseKey);
  const acceptsChildren = !unions?.noChildren?.includes(componentName);
  // 필수 prop 미입력 시 tsc TS2741 오류. 타입이 필수 여부와 채울 값까지 전달
  const requiredProps = unions?.required?.[componentName] ?? [];

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
    stateNames: unions?.states?.[componentName] ?? [],
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
      acceptsChildren,
      requiredProps,
    },
  };
}
