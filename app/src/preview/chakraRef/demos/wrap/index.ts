/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./wrap-basic";
import * as m001 from "./wrap-with-gap";
import * as m002 from "./wrap-with-align";
import * as m003 from "./wrap-with-justify";
import * as m004 from "./wrap-with-row-column-gap";
import * as m005 from "./wrap-responsive";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "wrap-basic": m000.WrapBasic,
  "wrap-with-gap": m001.WrapWithGap,
  "wrap-with-align": m002.WrapWithAlign,
  "wrap-with-justify": m003.WrapWithJustify,
  "wrap-with-row-column-gap": m004.WrapWithRowColumnGap,
  "wrap-responsive": m005.WrapResponsive,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
