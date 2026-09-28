import index from "./index.json";

export interface LightningRef {
  // 공식 저장소 기준 경로, ui/components/alert/docs.mdx
  repoPath: string;
  // 설치본 내 압축 번들 경로. 사람이 읽을 수 없는 형식임
  bundled: string;
  bundleExists: boolean;
}
export interface LightningScssFile { source: string; code: string }
export interface LightningHooks {
  columns: string[];
  // 훅 이름, fallback, 범주, 값 타입, 출처 순서
  rows: (string | null)[][];
  source: string;
}
export interface LightningDoc {
  slug: string;
  title: string;
  // 공식 문서 경로만 기록하고 본문 제외
  docs: LightningRef[];
  // 변형별 공식 예제 경로만 기록하고 본문 제외
  examples: LightningRef[];
  // 공식 원본은 이 컴포넌트의 SCSS
  scss: { files: LightningScssFile[]; source: string } | null;
  // 공식 스타일 훅 미제공 시 null
  stylingHooks: LightningHooks | null;
  version: string;
  packageSource: string;
}
export interface LightningIndexEntry {
  slug: string; title: string;
  docs: number; examples: number; scssFiles: number; hookRows: number;
}

export const LIGHTNING_INDEX: LightningIndexEntry[] = index.components as LightningIndexEntry[];
export const LIGHTNING_VERSION: string = index.version as string;

const SLUGS = new Set(LIGHTNING_INDEX.map((e) => e.slug));

// 슬러그가 SLDS 공식 목록에 있는지 확인
export function isLightningSlug(slug: string): boolean {
  return SLUGS.has(slug);
}

export function loadLightningDoc(slug: string): Promise<LightningDoc> | null {
  if (!isLightningSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as LightningDoc);
}
