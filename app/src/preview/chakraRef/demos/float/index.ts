/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./float-basic";
import * as m001 from "./float-with-placements";
import * as m002 from "./float-with-offset-x";
import * as m003 from "./float-with-offset-y";
import * as m004 from "./float-with-offset";
import * as m005 from "./float-with-avatar";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "float-basic": m000.FloatBasic,
  "float-with-placements": m001.FloatWithPlacements,
  "float-with-offset-x": m002.FloatWithOffsetX,
  "float-with-offset-y": m003.FloatWithOffsetY,
  "float-with-offset": m004.FloatWithOffset,
  "float-with-avatar": m005.FloatWithAvatar,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
