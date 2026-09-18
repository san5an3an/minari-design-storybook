/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./flex-basic";
import * as m001 from "./flex-with-direction";
import * as m002 from "./flex-with-align";
import * as m003 from "./flex-with-justify";
import * as m004 from "./flex-with-order";
import * as m005 from "./flex-with-auto-margin";
import * as m006 from "./flex-with-spacer";
import * as m007 from "./flex-with-wrap";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "flex-basic": m000.FlexBasic,
  "flex-with-direction": m001.FlexWithDirection,
  "flex-with-align": m002.FlexWithAlign,
  "flex-with-justify": m003.FlexWithJustify,
  "flex-with-order": m004.FlexWithOrder,
  "flex-with-auto-margin": m005.FlexWithAutoMargin,
  "flex-with-spacer": m006.FlexWithSpacer,
  "flex-with-wrap": m007.FlexWithWrap,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
