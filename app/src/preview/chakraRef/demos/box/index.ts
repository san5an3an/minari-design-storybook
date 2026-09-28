/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./box-basic";
import * as m001 from "./box-with-shorthand";
import * as m002 from "./box-with-pseudo-props";
import * as m003 from "./box-with-border";
import * as m004 from "./box-with-as-prop";
import * as m005 from "./box-with-shadow";
import * as m006 from "./box-property-card";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "box-basic": m000.BoxBasic,
  "box-with-shorthand": m001.BoxWithShorthand,
  "box-with-pseudo-props": m002.BoxWithPseudoProps,
  "box-with-border": m003.BoxWithBorder,
  "box-with-as-prop": m004.BoxWithAsProp,
  "box-with-shadow": m005.BoxWithShadow,
  "box-property-card": m006.BoxPropertyCard,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
