/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./visually-hidden-basic";
import * as m001 from "./visually-hidden-with-input";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "visually-hidden-basic": m000.VisuallyHiddenBasic,
  "visually-hidden-with-input": m001.VisuallyHiddenWithInput,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
