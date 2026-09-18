/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./theme-basic";
import * as m001 from "./theme-nested";
import * as m002 from "./theme-with-portalled";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "theme-basic": m000.ThemeBasic,
  "theme-nested": m001.ThemeNested,
  "theme-with-portalled": m002.ThemeWithPortalled,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
