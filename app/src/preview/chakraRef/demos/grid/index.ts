/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./grid-basic";
import * as m001 from "./grid-with-col-span";
import * as m002 from "./grid-spanning-columns";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "grid-basic": m000.GridBasic,
  "grid-with-col-span": m001.GridWithColSpan,
  "grid-spanning-columns": m002.GridSpanningColumns,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
