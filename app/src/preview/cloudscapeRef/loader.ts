import index from "./index.json";

export interface CloudscapeTable {
  name: string;
  columns: string[];
  // 마지막 셀은 출처 표시, file:line 형식. 없는 행은 생성 제외
  rows: string[][];
  source: string;
}
export interface CloudscapeExample {
  name: string;
  // 공식 설명 미제공 시 null, 빈 문자열과 구분
  description: string | null;
  code: string;
  // 저장소 안 실제 경로
  source: string;
}
export interface CloudscapeDoc {
  slug: string;
  title: string;
  // null = 공식 문서에 해당 섹션 없음
  description: string | null;
  descriptionSource: string | null;
  group: string | null;
  examples: CloudscapeExample[];
  props: CloudscapeTable | null;
  version: string;
  sourceRepo: string;
}
export interface CloudscapeIndexEntry {
  slug: string; title: string;
  examples: number; propRows: number; hasDescription: boolean;
}

export const CLOUDSCAPE_INDEX: CloudscapeIndexEntry[] = index.components as CloudscapeIndexEntry[];
export const CLOUDSCAPE_VERSION: string = index.version as string;

const SLUGS = new Set(CLOUDSCAPE_INDEX.map((e) => e.slug));

// 슬러그가 cloudscape 공식 목록에 있는지 확인
export function isCloudscapeSlug(slug: string): boolean {
  return SLUGS.has(slug);
}

export function loadCloudscapeDoc(slug: string): Promise<CloudscapeDoc> | null {
  if (!isCloudscapeSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as CloudscapeDoc);
}
