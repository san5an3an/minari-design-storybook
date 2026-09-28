/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./card-basic";
import * as m001 from "./card-with-variants";
import * as m002 from "./card-with-form";
import * as m003 from "./card-with-sizes";
import * as m004 from "./card-with-image";
import * as m005 from "./card-horizontal";
import * as m006 from "./card-with-avatar";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "card-basic": m000.CardBasic,
  "card-with-variants": m001.CardWithVariants,
  "card-with-form": m002.CardWithForm,
  "card-with-sizes": m003.CardWithSizes,
  "card-with-image": m004.CardWithImage,
  "card-horizontal": m005.CardHorizontal,
  "card-with-avatar": m006.CardWithAvatar,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
