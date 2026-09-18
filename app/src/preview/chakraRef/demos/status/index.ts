/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./status-basic";
import * as m001 from "./status-with-label";
import * as m002 from "./status-with-sizes";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "status-basic": m000.StatusBasic,
  "status-with-label": m001.StatusWithLabel,
  "status-with-sizes": m002.StatusWithSizes,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
