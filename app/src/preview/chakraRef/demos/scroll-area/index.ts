/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./scroll-area-basic";
import * as m001 from "./scroll-area-with-variants";
import * as m002 from "./scroll-area-with-sizes";
import * as m003 from "./scroll-area-horizontal";
import * as m004 from "./scroll-area-both-directions";
import * as m005 from "./scroll-area-with-scroll-shadow";
import * as m006 from "./scroll-area-with-thumb-styling";
import * as m007 from "./scroll-area-stick-to-bottom";
import * as m008 from "./scroll-area-virtualization";
import * as m009 from "./scroll-area-with-store";
import * as m010 from "./scroll-area-scroll-to-side";
import * as m011 from "./scroll-area-scroll-to-position";
import * as m012 from "./scroll-area-with-rtl";
import * as m013 from "./scroll-area-with-menu";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "scroll-area-basic": m000.ScrollAreaBasic,
  "scroll-area-with-variants": m001.ScrollAreaWithVariants,
  "scroll-area-with-sizes": m002.ScrollAreaWithSizes,
  "scroll-area-horizontal": m003.ScrollAreaHorizontal,
  "scroll-area-both-directions": m004.ScrollAreaBothDirections,
  "scroll-area-with-scroll-shadow": m005.ScrollAreaWithScrollShadow,
  "scroll-area-with-thumb-styling": m006.ScrollAreaWithThumbStyling,
  "scroll-area-stick-to-bottom": m007.ScrollAreaStickToBottom,
  "scroll-area-virtualization": m008.ScrollAreaVirtualization,
  "scroll-area-with-store": m009.ScrollAreaWithStore,
  "scroll-area-scroll-to-side": m010.ScrollAreaScrollToSide,
  "scroll-area-scroll-to-position": m011.ScrollAreaScrollToPosition,
  "scroll-area-with-rtl": m012.ScrollAreaWithRtl,
  "scroll-area-with-menu": m013.ScrollAreaWithMenu,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
