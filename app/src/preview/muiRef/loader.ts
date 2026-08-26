import index from "./index.json";

// 섹션 내 블록 하나, 공식 문서 순서 유지
export type MuiBlock =
  | { kind: "prose"; text: string }
  | { kind: "code"; lang: string; text: string }
  | { kind: "demo"; name: string; file: string; code: string };

export interface MuiSection {
  // 2는 ##, 3은 ###, 0은 첫 제목 앞 머리말
  level: number;
  title: string;
  blocks: MuiBlock[];
}

export interface MuiProp {
  prop: string;
  type: string;
  // 값 미지정 시 기본값. null이면 기본값이 없다는 뜻임
  default: string | null;
  required: boolean;
  deprecated: boolean;
  // 설명 없는 번역 항목은 빈 문자열 유지
  desc: string;
}

export interface MuiApi {
  name: string;
  description: string;
  props: MuiProp[];
  classes: { key: string; className: string; description: string }[];
}

export interface MuiDoc {
  slug: string;
  title: string;
  group: string;
  // 공식 저장소 문서 폴더 이름
  folder: string;
  // 공식 한 줄 소개. null은 해당 줄이 없다는 뜻이며 빈 문자열과는 다른 값임
  description: string | null;
  // 문서화 대상 컴포넌트 Button, IconButton, ButtonBase
  components: string[];
  sections: MuiSection[];
  api: MuiApi[];
  docHref: string;
}

export interface MuiIndexEntry {
  slug: string;
  title: string;
  group: string;
  sections: number;
  demos: number;
  apiRows: number;
  // 저장소가 다른 항목, MUI X 4종. 미구현 항목과는 구분
  external: boolean;
}

export const MUI_GROUPS: Record<string, string[]> = index.groups;
export const MUI_INDEX: MuiIndexEntry[] = index.components as MuiIndexEntry[];
const BY_SLUG = new Map(MUI_INDEX.map((c) => [c.slug, c]));

// 이름의 MUI 공식 컴포넌트 여부. 라우팅에서 MUI 화면 구분에 사용
export function isMuiSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function muiEntry(slug: string): MuiIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadMuiDoc(slug: string): Promise<MuiDoc> | null {
  const found = BY_SLUG.get(slug);
  if (!found || found.external) return null;
  return import(`./${slug}.json`).then((m) => m.default as MuiDoc);
}
