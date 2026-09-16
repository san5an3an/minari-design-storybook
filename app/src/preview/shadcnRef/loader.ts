import index from "./_index.json";

// 값과 출처 위치 정보. source는 경로:줄 형식, 해당 줄에 name이 있음
export interface ShadcnAnchor {
  name: string;
  // 파일:줄 형식 표시. 줄 정보 없으면 파일까지만 표시
  source: string;
}

export interface ShadcnDoc {
  slug: string;
  // 공식이 낸 유일한 이름 = 레지스트리 name. 임의로 고쳐 적지 않음
  title: string;
  // 레지스트리가 지정한 설치 경로
  registryPath: string;
  // 원본 트리 기준 경로, code 값과 byte 단위 대조용
  source: string;
  // 원문 전체 그대로 사용, 요약 없이 미러 원본으로 유지
  code: string;
  license: string;
  lines: number;
  style: string;
  // npm 의존성, 레지스트리 값 그대로 사용
  dependencies: string[];
  // 컴포넌트가 끌고 오는 다른 레지스트리 항목
  registryDependencies: string[];
  // 공식이 가리킨 주소만 사용. api는 base-ui 등 타 문서임
  links: Record<string, string>;
  exports: ShadcnAnchor[];
  imports: string[];
  // data-slot 값. shadcn 스타일 적용 위치를 가리키는 계약에 가까운 이름임
  dataSlots: ShadcnAnchor[];
  usesCva: boolean;
  // cva 열거 축만 저장. 클래스 문자열은 code와 중복되면 값이 어긋날 수 있음
  variants: Record<string, string[]>;
  defaultVariants: Record<string, string>;
  semanticTokens: string[];
  // 레지스트리가 따로 낸 안내글. 있는 항목에만 있음
  docs?: string;
}

export interface ShadcnIndexEntry {
  slug: string;
  title: string;
  lines: number;
  exports: number;
  dataSlots: number;
  variantAxes: number;
  semanticTokens: number;
  usesCva: boolean;
}

interface ShadcnIndexFile {
  registry: string;
  style: string;
  styleDeclaredBy: string;
  license: string;
  licenseNote: string;
  fetchedAt: string;
  upstreamVersion: string | null;
  upstreamVersionNote: string;
  packages: Record<string, string>;
  denominators: Record<string, unknown>;
  noFileItems: string[];
  filteredNote: string;
  installedComparison: {
    installedDir: string;
    byteSame: number;
    byteDiff: number;
    absent: number;
    sameNames: string[];
    meaning: string;
  };
  negativeControl: {
    anchorsChecked: number;
    anchorsCaughtWhenShifted: number;
    meaning: string;
  };
  components: ShadcnIndexEntry[];
}

const IDX = index as ShadcnIndexFile;

export const SHADCN_SOURCE = {
  registry: IDX.registry,
  style: IDX.style,
  styleDeclaredBy: IDX.styleDeclaredBy,
  license: IDX.license,
  note: IDX.licenseNote,
  // 레지스트리가 버전을 커밋하지 않아 이 값이 유일한 시간 기준임
  fetchedAt: IDX.fetchedAt,
  packages: IDX.packages,
  // 수치 옆에 붙는 의미 라벨
  denominators: IDX.denominators,
  // 공식 목록에는 있으나 의도적으로 파일을 안 낸 항목임
  noFileItems: IDX.noFileItems,
  installed: IDX.installedComparison,
} as const;

export const SHADCN_INDEX: ShadcnIndexEntry[] = IDX.components;
const BY_SLUG = new Map(SHADCN_INDEX.map((c) => [c.slug, c]));

// 이름의 shadcn 공식 컴포넌트 여부. 라우팅에서 shadcn 미러 화면 구분에 사용
export function isShadcnSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

export function shadcnEntry(slug: string): ShadcnIndexEntry | undefined {
  return BY_SLUG.get(slug);
}

export function loadShadcnDoc(slug: string): Promise<ShadcnDoc> | null {
  if (!isShadcnSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as ShadcnDoc);
}
