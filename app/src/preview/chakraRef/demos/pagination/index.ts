/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./pagination-basic";
import * as m001 from "./pagination-with-sizes";
import * as m002 from "./pagination-with-variants";
import * as m003 from "./pagination-controlled";
import * as m004 from "./pagination-with-sibling-count";
import * as m005 from "./pagination-compact";
import * as m006 from "./pagination-as-link";
import * as m007 from "./pagination-attached";
import * as m008 from "./pagination-with-count-text";
import * as m009 from "./pagination-with-content";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "pagination-basic": m000.PaginationBasic,
  "pagination-with-sizes": m001.PaginationWithSizes,
  "pagination-with-variants": m002.PaginationWithVariants,
  "pagination-controlled": m003.PaginationControlled,
  "pagination-with-sibling-count": m004.PaginationWithSiblingCount,
  "pagination-compact": m005.PaginationCompact,
  "pagination-as-link": m006.PaginationAsLink,
  "pagination-attached": m007.PaginationAttached,
  "pagination-with-count-text": m008.PaginationWithCountText,
  "pagination-with-content": m009.PaginationWithContent,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
