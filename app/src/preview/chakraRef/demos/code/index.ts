/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./code-basic";
import * as m001 from "./code-with-sizes";
import * as m002 from "./code-with-variants";
import * as m003 from "./code-with-colors";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "code-basic": m000.CodeBasic,
  "code-with-sizes": m001.CodeWithSizes,
  "code-with-variants": m002.CodeWithVariants,
  "code-with-colors": m003.CodeWithColors,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
