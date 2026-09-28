/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./action-bar-basic";
import * as m001 from "./action-bar-with-close-trigger";
import * as m002 from "./action-bar-with-dialog";
import * as m003 from "./action-bar-placement";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "action-bar-basic": m000.ActionBarBasic,
  "action-bar-with-close-trigger": m001.ActionBarWithCloseTrigger,
  "action-bar-with-dialog": m002.ActionBarWithDialog,
  "action-bar-placement": m003.ActionBarPlacement,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
