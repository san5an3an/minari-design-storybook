/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./toggle-tip-basic";
import * as m001 from "./toggle-tip-info-tip";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "toggle-tip-basic": m000.ToggleTipBasic,
  "toggle-tip-info-tip": m001.ToggleTipInfoTip,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
