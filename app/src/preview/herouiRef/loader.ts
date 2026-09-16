import manifest from "./_index.json";

// 공식 frontmatter가 붙이는 외부 참조값
export interface HerouiLinks {
  // 컴포넌트가 감싸는 react-aria-components 이름
  rac?: string;
  sourceFile?: string;
  // 저장소 안의 스타일 파일
  styles?: string;
  storybook?: string;
  figma?: string;
}

export interface HerouiExample {
  // ### 소제목 텍스트. 없으면 섹션 이름으로 대체하기
  name: string;
  section: string;
  // 공식이 <ComponentPreview name=...>로 부른 이름
  key: string;
  // 예제 원본 파일 상대경로. null은 레지스트리 미등록 표시
  source: string | null;
  // 원본 파일 그대로 유지, 바이트 동일 여부로 검증
  code: string;
}

export interface HerouiTable {
  // 출처 섹션 표시, API Reference 등
  section: string;
  name: string;
  columns: string[];
  rows: string[][];
  // 표가 놓인 ### 행
  source: string;
}

export interface HerouiVariant {
  // prop 이름은 백틱으로 표기. 원문과 대조하려면 이 형식이 필수임
  name: string;
  // 백틱 제거한 이름, 화면 표시용
  prop: string;
  // 실제 렌더링 가능한 리터럴 값
  values: string[];
  // 열거 불가능한 객체 함수 항목도 보존. 버리면 원래 값이 그것뿐인 것처럼 보이는 문제 있음
  other: string[];
  default: string;
  owner: string;
  derivedFrom: "type";
  // 축이 실제로 적힌 행
  source: string | null;
}

export interface HerouiSection {
  // ## 섹션 제목 그대로 유지
  name: string;
  // 섹션 원문
  body: string;
  // ## 제목이 있는 줄
  source: string;
}

export interface HerouiDoc {
  slug: string;
  title: string;
  description: string;
  group: string;
  links: HerouiLinks;
  sections: HerouiSection[];
  examples: HerouiExample[];
  // 섹션 구분 없는 전체 표 데이터. section 기준으로 분리해 사용
  tables: HerouiTable[];
  // tables 배열 내 인덱스, 표 복제 제외
  propsTable: number | null;
  variants: HerouiVariant[];
}

// 이름 같은 섹션이 여럿일 수 있어 배열로 반환. [0] 명시해야 존재를 알 수 있음
export function docSections(doc: HerouiDoc, name: string): HerouiSection[] {
  return doc.sections.filter((s) => s.name === name);
}

// API Reference, Styling Reference 같은 섹션명으로 표만 선택하기
export function docTables(doc: HerouiDoc, section: string): HerouiTable[] {
  return doc.tables.filter((t) => t.section === section);
}

export interface HerouiIndexEntry {
  slug: string;
  title: string;
  group: string;
  examples: number;
  apiRows: number;
  variants: number;
  sections: string[];
}

// 수치에 분모를 함께 기록
export interface HerouiDenominators {
  components: number;
  componentsMeaning: string;
  demoRegistry: number;
  demoRegistryMeaning: string;
  examplesReferenced: number;
  examplesReferencedMeaning: string;
  // 레지스트리에는 있으나 문서 미참조인 항목 수 계산
  orphan: string[];
  orphanMeaning: string;
  // 문서가 참조하나 레지스트리에 없는 항목 표시. 있으면 예제 코드가 비어 있음
  ghost: string[];
  ghostMeaning: string;
}

export interface HerouiManifest {
  version: string;
  ref: string;
  denominators: HerouiDenominators;
  groups: Record<string, string[]>;
  components: HerouiIndexEntry[];
}

const M = manifest as HerouiManifest;

export const HEROUI_SOURCE = {
  version: M.version,
  ref: M.ref,
  denominators: M.denominators,
} as const;

const NOT_A_COMPONENT_HERE: Record<string, string> = {};

export const HEROUI_GROUPS: Record<string, string[]> = Object.fromEntries(
  Object.entries(M.groups)
    .map(([g, slugs]) => [g, slugs.filter((s) => !(s in NOT_A_COMPONENT_HERE))])
    // 필터 후 빈 그룹은 제외. 안 빼면 사이드바에 이름만 있고 항목 없는 영역이 남아 고장처럼 보임
    .filter(([, slugs]) => slugs.length > 0),
);

export const HEROUI_INDEX: HerouiIndexEntry[] = M.components
  .filter((c) => !(c.slug in NOT_A_COMPONENT_HERE));
const BY_SLUG = new Map(HEROUI_INDEX.map((c) => [c.slug, c]));

// 이름의 HeroUI 공식 컴포넌트 여부. 라우팅에서 heroui 화면 구분에 사용
export function isHerouiSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function herouiEntry(slug: string): HerouiIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadHerouiDoc(slug: string): Promise<HerouiDoc> | null {
  if (!isHerouiSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as HerouiDoc);
}
