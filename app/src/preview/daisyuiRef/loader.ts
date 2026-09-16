import manifest from "./_index.json";

export interface DaisyuiDoc {
  slug: string;
  // 공식이 낸 유일한 이름 = 파일 이름. 임의로 고쳐 적지 않음
  title: string;
  source: string;
  package: string;
  version: string | null;
  license: string;
  // css-banner는 원문 스스로 밝힌 값, package.json은 배너 없을 때 대체값
  versionSource: "css-banner" | "package.json";
  // CSS 원문 전체 그대로 유지, 미러 본체 요약이나 재작성 제외
  code: string;
  bytes: number;
  // daisyUI 계약. 사용자가 그대로 쓰는 클래스 이름
  classes: string[];
  // 컴포넌트 정의 CSS 변수에 토큰 연결
  cssVars: string[];
}

export interface DaisyuiIndexEntry {
  slug: string;
  title: string;
  bytes: number;
  classes: number;
  cssVars: number;
}

export interface DaisyuiManifest {
  package: string;
  version: string | null;
  license: string;
  sourceRoot: string;
  sourceNote: string;
  components: DaisyuiIndexEntry[];
}

const M = manifest as DaisyuiManifest;

export const DAISYUI_SOURCE = {
  package: M.package,
  version: M.version,
  license: M.license,
  root: M.sourceRoot,
  note: M.sourceNote,
} as const;

export const DAISYUI_INDEX: DaisyuiIndexEntry[] = M.components;
const BY_SLUG = new Map(DAISYUI_INDEX.map((c) => [c.slug, c]));

export function isDaisyuiSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function daisyuiEntry(slug: string): DaisyuiIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadDaisyuiDoc(slug: string): Promise<DaisyuiDoc> | null {
  if (!isDaisyuiSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as DaisyuiDoc);
}
