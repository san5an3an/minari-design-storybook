/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./for-basic";
import * as m001 from "./for-with-object";
import * as m002 from "./for-with-fallback";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "for-basic": m000.ForBasic,
  "for-with-object": m001.ForWithObject,
  "for-with-fallback": m002.ForWithFallback,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
