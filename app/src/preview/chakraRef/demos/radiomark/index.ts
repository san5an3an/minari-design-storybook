/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./radiomark-basic";
import * as m001 from "./radiomark-states";
import * as m002 from "./radiomark-variants";
import * as m003 from "./radiomark-with-sizes";
import * as m004 from "./radiomark-with-colors";
import * as m005 from "./radiomark-with-filled";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "radiomark-basic": m000.RadiomarkBasic,
  "radiomark-states": m001.RadiomarkStates,
  "radiomark-variants": m002.RadiomarkVariants,
  "radiomark-with-sizes": m003.RadiomarkWithSizes,
  "radiomark-with-colors": m004.RadiomarkWithColors,
  "radiomark-with-filled": m005.RadiomarkWithFilled,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
