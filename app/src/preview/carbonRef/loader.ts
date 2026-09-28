import index from "./index.json";

export interface CarbonTable {
  name: string; columns: string[];
  // 마지막 셀은 출처 표시, file:line 형식
  rows: string[][];
  source: string;
}
export interface CarbonExample {
  name: string;
  // 공식 설명 미제공 시 null, 빈 문자열과 구분
  description: string | null;
  code: string;
  source: string;
}
export interface CarbonDocBody {
  markdown: string;
  source: string;
  sections: { name: string; source: string }[];
}
export interface CarbonDoc {
  slug: string;
  title: string;
  docs: CarbonDocBody[];
  group: string | null;
  // 설치본에는 있으나 저장소에 동일 이름 폴더가 없을 때만 있음
  note?: string;
  examples: CarbonExample[];
  props: CarbonTable | null;
  version: string;
  tag: string;
  sourceRepo: string;
}
export interface CarbonIndexEntry {
  slug: string; title: string; group: string | null;
  examples: number; propRows: number; hasDoc: boolean;
}

export const CARBON_INDEX: CarbonIndexEntry[] = index.components as CarbonIndexEntry[];
export const CARBON_VERSION: string = index.version as string;

const SLUGS = new Set(CARBON_INDEX.map((e) => e.slug));

// 슬러그가 carbon 공식 목록에 있는지 확인
export function isCarbonSlug(slug: string): boolean {
  return SLUGS.has(slug);
}

export function loadCarbonDoc(slug: string): Promise<CarbonDoc> | null {
  if (!isCarbonSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as CarbonDoc);
}
