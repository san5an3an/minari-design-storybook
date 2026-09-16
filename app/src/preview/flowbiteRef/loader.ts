import index from "./index.json";

export interface FlowbiteExample {
  name: string;
  // null = 예제 파일에 설명 없음. 설명은 문서 본문에 있음
  description: string | null;
  code: string;
  // 예제 파일 실제 경로
  source: string;
  // 예제 참조 위치
  calledAt: string;
}
export interface FlowbiteDoc {
  slug: string;
  category: string;
  // null = 공식 frontmatter에 해당 필드 없음
  title: string | null;
  description: string | null;
  doc: { markdown: string; source: string; sections: { name: string; source: string }[] };
  examples: FlowbiteExample[];
  // 문서가 참조하나 파일이 없는 예제. 지어내지 않고 사실만 기록한 것임
  examplesMissingFile: { name: string; calledAt: string }[];
  version: string;
  tag: string;
  sourceRepo: string;
}
export interface FlowbiteIndexEntry {
  slug: string; category: string; title: string | null; examples: number;
}

export const FLOWBITE_INDEX: FlowbiteIndexEntry[] = index.components as FlowbiteIndexEntry[];
export const FLOWBITE_VERSION: string = index.version as string;

// 컴포넌트가 속한 문서 페이지. 페이지 37과 컴포넌트 46 차이는 forms 통합 때문임
export const FLOWBITE_COMPONENT_HOME: Record<string, string | null> =
  index.componentHome as Record<string, string | null>;

const SLUGS = new Set(FLOWBITE_INDEX.map((e) => e.slug));

// 슬러그의 flowbite 공식 문서 목록 포함 여부
export function isFlowbiteSlug(slug: string): boolean {
  return SLUGS.has(slug);
}

export function loadFlowbiteDoc(slug: string): Promise<FlowbiteDoc> | null {
  if (!isFlowbiteSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as FlowbiteDoc);
}
