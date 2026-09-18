/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./link-basic";
import * as m001 from "./link-with-variants";
import * as m002 from "./link-within-text";
import * as m003 from "./link-with-external";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "link-basic": m000.LinkBasic,
  "link-with-variants": m001.LinkWithVariants,
  "link-within-text": m002.LinkWithinText,
  "link-with-external": m003.LinkWithExternal,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
