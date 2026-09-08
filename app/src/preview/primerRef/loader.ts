import manifest from "./_index.json";

// 레코드별 prop 정의 하나, 필드 구성은 레코드마다 다르고 전부 선택 항목
export interface PrimerProp {
  name?: string;
  type?: string;
  // 공식이 defaultValue와 default 둘 다 사용. 하나로 합치지 않음
  defaultValue?: string;
  default?: string;
  required?: boolean;
  deprecated?: boolean;
  describedby?: string;
  // 마크다운 백틱, 링크 잔존 시 문서 원문 그대로 복사된 값
  description?: string;
}

export interface PrimerStory {
  id: string;
  // 단독 사용 불가. PrimerDoc.standsAlone 참고
  code: string;
}

export interface PrimerSubcomponent {
  name: string;
  props?: PrimerProp[];
  passthrough?: unknown;
}

// 원문 레코드 그대로 유지, 무수정
export interface PrimerOfficial {
  id: string;
  name: string;
  status: string;
  a11yReviewed?: string;
  importPath?: string;
  // 저장소 URL. 로컬 경로가 아니라 파일로 열 수 없음
  source: string;
  docsId?: string;
  passthrough?: unknown;
  props?: PrimerProp[];
  stories?: PrimerStory[];
  subcomponents?: PrimerSubcomponent[];
}

export interface PrimerDoc {
  // 공식 id, 80/80 케이스 유일값
  slug: string;
  // 공식 name 값. 4쌍 중복으로 키 사용 불가, 제목 전용임
  title: string;
  official: PrimerOfficial;
  // 설치본 내 실재 출처, 경로:행 형식. official.source와 달리 로컬 검증 대상
  source: string;
  // 공식 name 대신 슬러그 사용. title은 중복이 있어 앵커로 쓸 수 없음
  name: string;
  // 파일 내 위치 $.components.action_list
  sourceKey: string;
  version: string;
  packageSource: string;
  // 항상 false 반환. 예제 598개 중 import 0개
  standsAlone: boolean;
  // 프래그먼트가 쓰지만 프래그먼트 안에 없는 이름. 정규식 근사라 정확한 목록이 아니라 근사치임
  freeIdentifiers: string[];
}

export interface PrimerIndexEntry {
  slug: string;
  title: string;
  status: string;
  props: number;
  subcomponents: number;
  subcomponentProps: number;
  stories: number;
  freeIdentifiers: number;
}

export interface PrimerManifest {
  package: string;
  version: string;
  packageSource: string;
  sourcePath: string;
  sourceNote: string;
  components: PrimerIndexEntry[];
  // 분모가 여러 개. 각 수치가 무엇에 대한 값인지 함께 표기
  denominators: Record<string, unknown>;
}

const M = manifest as unknown as PrimerManifest;

export const PRIMER_SOURCE = {
  package: M.package,
  version: M.version,
  packageSource: M.packageSource,
  sourcePath: M.sourcePath,
  note: M.sourceNote,
} as const;

export const PRIMER_VERSION: string = M.version;
export const PRIMER_INDEX: PrimerIndexEntry[] = M.components;
export const PRIMER_DENOMINATORS: Record<string, unknown> = M.denominators;

const BY_SLUG = new Map(PRIMER_INDEX.map((c) => [c.slug, c]));

// 슬러그가 Primer 공식 목록에 있는지 확인
export function isPrimerSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function primerEntry(slug: string): PrimerIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadPrimerDoc(slug: string): Promise<PrimerDoc> | null {
  if (!isPrimerSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as PrimerDoc);
}
