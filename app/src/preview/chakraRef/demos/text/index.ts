/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./text-basic";
import * as m001 from "./text-with-sizes";
import * as m002 from "./text-with-weights";
import * as m003 from "./text-with-truncate";
import * as m004 from "./text-with-line-clamp";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "text-basic": m000.TextBasic,
  "text-with-sizes": m001.TextWithSizes,
  "text-with-weights": m002.TextWithWeights,
  "text-with-truncate": m003.TextWithTruncate,
  "text-with-line-clamp": m004.TextWithLineClamp,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
