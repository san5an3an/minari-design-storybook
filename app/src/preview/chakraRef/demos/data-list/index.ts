/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./data-list-basic";
import * as m001 from "./data-list-with-sizes";
import * as m002 from "./data-list-with-variants";
import * as m003 from "./data-list-with-orientation";
import * as m004 from "./data-list-with-info";
import * as m005 from "./data-list-with-separator";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "data-list-basic": m000.DataListBasic,
  "data-list-with-sizes": m001.DataListWithSizes,
  "data-list-with-variants": m002.DataListWithVariants,
  "data-list-with-orientation": m003.DataListWithOrientation,
  "data-list-with-info": m004.DataListWithInfo,
  "data-list-with-separator": m005.DataListWithSeparator,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
