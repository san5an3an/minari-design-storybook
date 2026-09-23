/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./rating-basic";
import * as m001 from "./rating-with-sizes";
import * as m002 from "./rating-controlled";
import * as m003 from "./rating-with-store";
import * as m004 from "./rating-with-readonly";
import * as m005 from "./rating-with-hook-form";
import * as m006 from "./rating-with-custom-icon";
import * as m007 from "./rating-with-label";
import * as m008 from "./rating-with-half";
import * as m009 from "./rating-emoji";
import * as m010 from "./rating-with-colors";
import * as m011 from "./rating-in-testimonial";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "rating-basic": m000.RatingBasic,
  "rating-with-sizes": m001.RatingWithSizes,
  "rating-controlled": m002.RatingControlled,
  "rating-with-store": m003.RatingWithStore,
  "rating-with-readonly": m004.RatingWithReadonly,
  "rating-with-hook-form": m005.RatingWithHookForm,
  "rating-with-custom-icon": m006.RatingWithCustomIcon,
  "rating-with-label": m007.RatingWithLabel,
  "rating-with-half": m008.RatingWithHalf,
  "rating-emoji": m009.RatingEmoji,
  "rating-with-colors": m010.RatingWithColors,
  "rating-in-testimonial": m011.RatingInTestimonial,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
