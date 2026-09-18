/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./simple-grid-basic";
import * as m001 from "./simple-grid-with-columns";
import * as m002 from "./simple-grid-with-autofit";
import * as m003 from "./simple-grid-with-col-span";
import * as m004 from "./simple-grid-with-row-and-col-gap";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "simple-grid-basic": m000.SimpleGridBasic,
  "simple-grid-with-columns": m001.SimpleGridWithColumns,
  "simple-grid-with-autofit": m002.SimpleGridWithAutofit,
  "simple-grid-with-col-span": m003.SimpleGridWithColSpan,
  "simple-grid-with-row-and-col-gap": m004.SimpleGridWithRowAndColGap,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
