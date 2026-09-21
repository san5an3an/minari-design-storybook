/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./progress-basic";
import * as m001 from "./progress-with-sizes";
import * as m002 from "./progress-with-variants";
import * as m003 from "./progress-with-colors";
import * as m004 from "./progress-with-inline-label";
import * as m005 from "./progress-with-label-info";
import * as m006 from "./progress-indeterminate";
import * as m007 from "./progress-with-stripes";
import * as m008 from "./progress-with-animated-stripes";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "progress-basic": m000.ProgressBasic,
  "progress-with-sizes": m001.ProgressWithSizes,
  "progress-with-variants": m002.ProgressWithVariants,
  "progress-with-colors": m003.ProgressWithColors,
  "progress-with-inline-label": m004.ProgressWithInlineLabel,
  "progress-with-label-info": m005.ProgressWithLabelInfo,
  "progress-indeterminate": m006.ProgressIndeterminate,
  "progress-with-stripes": m007.ProgressWithStripes,
  "progress-with-animated-stripes": m008.ProgressWithAnimatedStripes,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
