/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./hover-card-basic";
import * as m001 from "./hover-card-controlled";
import * as m002 from "./hover-card-with-delay";
import * as m003 from "./hover-card-with-placement";
import * as m004 from "./hover-card-with-disabled";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "hover-card-basic": m000.HoverCardBasic,
  "hover-card-controlled": m001.HoverCardControlled,
  "hover-card-with-delay": m002.HoverCardWithDelay,
  "hover-card-with-placement": m003.HoverCardWithPlacement,
  "hover-card-with-disabled": m004.HoverCardWithDisabled,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
