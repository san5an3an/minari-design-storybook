/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./skip-nav-basic";
import * as m001 from "./skip-nav-custom-id";
import * as m002 from "./skip-nav-with-content";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "skip-nav-basic": m000.SkipNavBasic,
  "skip-nav-custom-id": m001.SkipNavCustomId,
  "skip-nav-with-content": m002.SkipNavWithContent,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
