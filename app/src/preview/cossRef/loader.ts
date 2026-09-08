import index from "./index.json";

export interface CossDoc {
  slug: string;
  // 공식이 낸 유일한 이름 = 파일 이름. 임의로 고쳐 적지 않음
  title: string;
  sourcePath: string;
  sourceUrl: string;
  license: string;
  // 원문 그대로 유지
  source: string;
  lines: number;
  exports: string[];
  imports: string[];
  usesCva: boolean;
  // cva 열거 축만 저장. 클래스 문자열은 source와 중복되면 값이 어긋날 수 있음
  variants: Record<string, string[]>;
  defaultVariants: Record<string, string>;
  semanticTokens: string[];
}

export interface CossIndexEntry {
  slug: string;
  title: string;
  lines: number;
  exports: number;
  variantAxes: number;
  semanticTokens: number;
  usesCva: boolean;
}

export interface CossIndex {
  repo: string;
  ref: string;
  sourceDir: string;
  license: string;
  licenseNote: string;
  components: CossIndexEntry[];
}

const IDX = index as CossIndex;

export const COSS_SOURCE = {
  repo: IDX.repo,
  ref: IDX.ref,
  dir: IDX.sourceDir,
  license: IDX.license,
  note: IDX.licenseNote,
} as const;

export const COSS_INDEX: CossIndexEntry[] = IDX.components;
const BY_SLUG = new Map(COSS_INDEX.map((c) => [c.slug, c]));

// 이름의 coss 공식 컴포넌트 여부. 라우팅에서 coss 화면 구분에 사용
export function isCossSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function cossEntry(slug: string): CossIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadCossDoc(slug: string): Promise<CossDoc> | null {
  if (!isCossSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as CossDoc);
}
