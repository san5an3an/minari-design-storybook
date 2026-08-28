import index from "./index.json";

export interface AntdTable { name?: string; columns: string[]; rows: string[][] }
export interface AntdExample {
  name: string; description: string; code: string;
  iframe?: number;
  demoId?: string;
}
export interface AntdVariant {
  prop: string;
  // 실제 렌더링 가능한 리터럴 값, AntdLive 전용 사용
  values: string[];
  other: string[];
  default: string;
  owner: string;
  // type은 Type 열의 리터럴 합집합, desc는 설명문 options 목록
  source: "type" | "desc";
  deprecated: boolean;
}
export interface AntdSemanticPart { name: string; mark: string; description: string }

export interface AntdDoc {
  slug: string;
  title: string;
  description: string;
  group: string;
  // null은 섹션 없음을 의미. 빈 값과 구분되게 처리
  whenToUse: string | null;
  examples: AntdExample[];
  api: AntdTable[];
  props: AntdTable | null;
  variants: AntdVariant[];
  semanticDom: { parts: AntdSemanticPart[]; dom: string } | null;
  designToken: string | null;
  componentToken: AntdTable[] | null;
  globalToken: AntdTable[] | null;
}

export interface AntdIndexEntry {
  slug: string; title: string; group: string;
  examples: number; apiRows: number; variants: number; tokens: number;
  semanticParts: number; hasWhenToUse: boolean; hasSemanticDom: boolean;
}

const NOT_A_COMPONENT_HERE: Record<string, string> = {
  typography: "활자는 이 저장소에서 Foundations예요. 컴포넌트 목록에 두지 않아요.",
};

export const ANTD_GROUPS: Record<string, string[]> = Object.fromEntries(
  Object.entries(index.groups as Record<string, string[]>)
    .map(([g, slugs]) => [g, slugs.filter((s) => !(s in NOT_A_COMPONENT_HERE))])
    // 필터 후 빈 그룹은 제외. 안 빼면 사이드바에 이름만 있고 항목 없는 영역이 남아 고장처럼 보임
    .filter(([, slugs]) => slugs.length > 0),
);
export const ANTD_INDEX: AntdIndexEntry[] = (index.components as AntdIndexEntry[])
  .filter((c) => !(c.slug in NOT_A_COMPONENT_HERE));
const BY_SLUG = new Map(ANTD_INDEX.map((c) => [c.slug, c]));

// 이름의 antd 공식 컴포넌트 여부. 라우팅에서 antd 화면 구분에 사용
export function isAntdSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function antdEntry(slug: string): AntdIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadAntdDoc(slug: string): Promise<AntdDoc> | null {
  if (!isAntdSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as AntdDoc);
}
