/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./skeleton-basic";
import * as m001 from "./skeleton-for-feed";
import * as m002 from "./skeleton-for-text";
import * as m003 from "./skeleton-with-children";
import * as m004 from "./skeleton-with-variants";
import * as m005 from "./skeleton-with-loaded";
import * as m006 from "./skeleton-with-start-end-color";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "skeleton-basic": m000.SkeletonBasic,
  "skeleton-for-feed": m001.SkeletonForFeed,
  "skeleton-for-text": m002.SkeletonForText,
  "skeleton-with-children": m003.SkeletonWithChildren,
  "skeleton-with-variants": m004.SkeletonWithVariants,
  "skeleton-with-loaded": m005.SkeletonWithLoaded,
  "skeleton-with-start-end-color": m006.SkeletonWithStartEndColor,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
