import type { BaseRefDoc } from "../refContract";
import META from "./_meta.json";

export interface ChakraIndexEntry {
  slug: string;
  title: string;
}

export const CHAKRA_INDEX: ChakraIndexEntry[] = META.index;
export const CHAKRA_GROUPS: Record<string, string[]> = META.groups;

const BY_SLUG = new Map(CHAKRA_INDEX.map((c) => [c.slug, c]));

// 이름의 Chakra 공식 컴포넌트 여부
export function isChakraSlug(slug: string): boolean {
  return BY_SLUG.has(slug);
}

// 컴포넌트는 열어 본 것만 지연 처리
export function loadChakraDoc(slug: string): Promise<BaseRefDoc> | null {
  if (!isChakraSlug(slug)) return null;
  return import(`./${slug}.json`).then((m) => m.default as BaseRefDoc);
}
