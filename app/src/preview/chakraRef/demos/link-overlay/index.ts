/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./link-overlay-basic";
import * as m001 from "./link-overlay-article";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "link-overlay-basic": m000.LinkOverlayBasic,
  "link-overlay-article": m001.LinkOverlayArticle,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
