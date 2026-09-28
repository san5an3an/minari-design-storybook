/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./badge-basic";
import * as m001 from "./badge-with-icon";
import * as m002 from "./badge-with-variants";
import * as m003 from "./badge-with-sizes";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "badge-basic": m000.BadgeBasic,
  "badge-with-icon": m001.BadgeWithIcon,
  "badge-with-variants": m002.BadgeWithVariants,
  "badge-with-sizes": m003.BadgeWithSizes,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
