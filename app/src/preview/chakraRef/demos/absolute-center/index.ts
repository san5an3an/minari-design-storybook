/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./absolute-center-basic";
import * as m001 from "./absolute-center-with-axis";
import * as m002 from "./absolute-center-with-content";
import * as m003 from "./absolute-center-with-overlay";
import * as m004 from "./absolute-center-with-rtl";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "absolute-center-basic": m000.AbsoluteCenterBasic,
  "absolute-center-with-axis": m001.AbsoluteCenterWithAxis,
  "absolute-center-with-content": m002.AbsoluteCenterWithContent,
  "absolute-center-with-overlay": m003.AbsoluteCenterWithOverlay,
  "absolute-center-with-rtl": m004.AbsoluteCenterWithRtl,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
