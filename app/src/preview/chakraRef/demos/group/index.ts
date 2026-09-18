/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./group-basic";
import * as m001 from "./group-with-button";
import * as m002 from "./group-with-attached";
import * as m003 from "./group-with-grow";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "group-basic": m000.GroupBasic,
  "group-with-button": m001.GroupWithButton,
  "group-with-attached": m002.GroupWithAttached,
  "group-with-grow": m003.GroupWithGrow,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
