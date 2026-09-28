/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./client-only-basic";
import * as m001 from "./client-only-with-fallback";
import * as m002 from "./client-only-render-prop";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "client-only-basic": m000.ClientOnlyBasic,
  "client-only-with-fallback": m001.ClientOnlyWithFallback,
  "client-only-render-prop": m002.ClientOnlyRenderProp,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
