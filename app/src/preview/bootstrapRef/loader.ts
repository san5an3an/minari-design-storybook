import manifest from "./_index.json";

// {이름}Props 선언 형태와 위치. null이면 렌더링되지 않음
export interface BootstrapPropsDecl {
  name: string;
  // interface는 직접 선언, type은 별칭, reexport는 다른 패키지에서 재수출
  kind: "interface" | "type" | "reexport";
  // sourcePath 내 1부터 시작하는 줄 번호
  line: number;
}

export interface BootstrapDoc {
  // 공식 내보내기 이름 목록. 대소문자 무시해도 중복 없음
  slug: string;
  title: string;
  // 설치본 내 실재 출처. esm/Alert.d.ts
  source: string;
  // 파일 전체 그대로 복제, 무수정
  code: string;
  bytes: number;
  // esm/index.d.ts 내 정의 위치, 줄과 줄 번호
  listedAs: { file: string; line: number; text: string };
  // 공식 {이름}Props 미제공 시 null
  props: BootstrapPropsDecl | null;
  // 기본 내보내기가 @restart/ui 등 다른 패키지 출처면 그 패키지명, 아니면 null
  externalOrigin: string | null;
  version: string;
  packageSource: string;
}

export interface BootstrapIndexEntry {
  slug: string;
  title: string;
  bytes: number;
  // props 없을 때 null 반환. 없음과 미상을 구분해 표시
  propsKind: "interface" | "type" | "reexport" | null;
  externalOrigin: string | null;
}

export interface BootstrapManifest {
  package: string;
  version: string;
  packageSource: string;
  sourcePath: string;
  sourceNote: string;
  components: BootstrapIndexEntry[];
  // 분모가 여러 개. 각 수치가 무엇에 대한 값인지 함께 표기
  denominators: Record<string, unknown>;
}

const M = manifest as unknown as BootstrapManifest;

export const BOOTSTRAP_SOURCE = {
  package: M.package,
  version: M.version,
  packageSource: M.packageSource,
  sourcePath: M.sourcePath,
  note: M.sourceNote,
} as const;

export const BOOTSTRAP_VERSION: string = M.version;
export const BOOTSTRAP_INDEX: BootstrapIndexEntry[] = M.components;
export const BOOTSTRAP_DENOMINATORS: Record<string, unknown> = M.denominators;

const BY_SLUG = new Map(BOOTSTRAP_INDEX.map((c) => [c.slug, c]));

// 슬러그가 공식 진입점 export 이름인지 확인
export function isBootstrapSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function bootstrapEntry(slug: string): BootstrapIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadBootstrapDoc(slug: string): Promise<BootstrapDoc> | null {
  if (!isBootstrapSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as BootstrapDoc);
}
