/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./carousel-basic";
import * as m001 from "./carousel-controlled";
import * as m002 from "./carousel-with-store";
import * as m003 from "./carousel-with-floating-arrow";
import * as m004 from "./carousel-with-indicators";
import * as m005 from "./carousel-with-thumbnails";
import * as m006 from "./carousel-spacing";
import * as m007 from "./carousel-variable-size";
import * as m008 from "./carousel-vertical";
import * as m009 from "./carousel-with-mouse-drag";
import * as m010 from "./carousel-with-autoplay";
import * as m011 from "./carousel-with-dialog";
import * as m012 from "./carousel-with-images";
import * as m013 from "./carousel-composition";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "carousel-basic": m000.CarouselBasic,
  "carousel-controlled": m001.CarouselControlled,
  "carousel-with-store": m002.CarouselWithStore,
  "carousel-with-floating-arrow": m003.CarouselWithFloatingArrow,
  "carousel-with-indicators": m004.CarouselWithIndicators,
  "carousel-with-thumbnails": m005.CarouselWithThumbnails,
  "carousel-spacing": m006.CarouselSpacing,
  "carousel-variable-size": m007.CarouselVariableSize,
  "carousel-vertical": m008.CarouselVertical,
  "carousel-with-mouse-drag": m009.CarouselWithMouseDrag,
  "carousel-with-autoplay": m010.CarouselWithAutoplay,
  "carousel-with-dialog": m011.CarouselWithDialog,
  "carousel-with-images": m012.CarouselWithImages,
  "carousel-composition": m013.CarouselComposition,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
