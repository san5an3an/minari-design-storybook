/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./show-basic";
import * as m001 from "./show-with-fallback";
import * as m002 from "./show-with-render-prop";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "show-basic": m000.ShowBasic,
  "show-with-fallback": m001.ShowWithFallback,
  "show-with-render-prop": m002.ShowWithRenderProp,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
