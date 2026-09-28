/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./highlight-basic";
import * as m001 from "./highlight-multiple";
import * as m002 from "./highlight-with-custom-style";
import * as m003 from "./highlight-search-query";
import * as m004 from "./highlight-with-squiggle";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "highlight-basic": m000.HighlightBasic,
  "highlight-multiple": m001.HighlightMultiple,
  "highlight-with-custom-style": m002.HighlightWithCustomStyle,
  "highlight-search-query": m003.HighlightSearchQuery,
  "highlight-with-squiggle": m004.HighlightWithSquiggle,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
