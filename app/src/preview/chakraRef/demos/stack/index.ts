/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./stack-basic";
import * as m001 from "./stack-horizontal";
import * as m002 from "./stack-with-hstack";
import * as m003 from "./stack-with-vstack";
import * as m004 from "./stack-with-separator";
import * as m005 from "./stack-with-responsive-direction";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "stack-basic": m000.StackBasic,
  "stack-horizontal": m001.StackHorizontal,
  "stack-with-hstack": m002.StackWithHstack,
  "stack-with-vstack": m003.StackWithVstack,
  "stack-with-separator": m004.StackWithSeparator,
  "stack-with-responsive-direction": m005.StackWithResponsiveDirection,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
