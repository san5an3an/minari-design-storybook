import manifest from "./_index.json";

// 원문 발췌본, at 은 원문 문자 offset 기준 잘림 위치 검증용
export interface BlueprintSlice {
  at: number;
}

export interface BlueprintHeading extends BlueprintSlice {
  level: number;
  text: string;
}

export interface BlueprintCode extends BlueprintSlice {
  // 코드펜스 첫 단어, 빈 문자열이면 언어 미지정
  lang: string;
  code: string;
}

export interface BlueprintExampleRef extends BlueprintSlice {
  name: string;
  arg: string;
}

export interface BlueprintDoc {
  slug: string;
  // front-matter title, 없으면 파일 이름 사용, 임의로 만들지 않음
  title: string;
  kind: "component" | "guide";
  sourcePath: string;
  package: string;
  version: string | null;
  license: string;
  // mdx 원문 그대로 유지. 미러 본체라 다시 쓰지 않음
  source: string;
  lines: number;
  frontMatter: Record<string, string>;
  headings: BlueprintHeading[];
  codeBlocks: BlueprintCode[];
  exampleRefs: BlueprintExampleRef[];
}

export interface BlueprintIndexEntry {
  slug: string;
  title: string;
  kind: "component" | "guide";
  lines: number;
  headings: number;
  codeBlocks: number;
  exampleRefs: number;
}

export interface BlueprintManifest {
  package: string;
  version: string | null;
  license: string;
  sourceRoot: string;
  sourceNote: string;
  components: BlueprintIndexEntry[];
}

const M = manifest as BlueprintManifest;

export const BLUEPRINT_SOURCE = {
  package: M.package,
  version: M.version,
  license: M.license,
  root: M.sourceRoot,
  note: M.sourceNote,
} as const;

export const BLUEPRINT_INDEX: BlueprintIndexEntry[] = M.components;
const BY_SLUG = new Map(BLUEPRINT_INDEX.map((c) => [c.slug, c]));

// 컴포넌트 문서만 대상, 가이드 문서와 구분되며 BLUEPRINT_INDEX에 포함
export const BLUEPRINT_COMPONENTS: BlueprintIndexEntry[] = BLUEPRINT_INDEX.filter(
  (c) => c.kind === "component",
);

export function isBlueprintSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function blueprintEntry(slug: string): BlueprintIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadBlueprintDoc(slug: string): Promise<BlueprintDoc> | null {
  if (!isBlueprintSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as BlueprintDoc);
}
