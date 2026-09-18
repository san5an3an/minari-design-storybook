/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./image-basic";
import * as m001 from "./image-with-height";
import * as m002 from "./image-circular";
import * as m003 from "./image-with-aspect-ratio";
import * as m004 from "./image-with-fit";
import * as m005 from "./image-with-html-height";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "image-basic": m000.ImageBasic,
  "image-with-height": m001.ImageWithHeight,
  "image-circular": m002.ImageCircular,
  "image-with-aspect-ratio": m003.ImageWithAspectRatio,
  "image-with-fit": m004.ImageWithFit,
  "image-with-html-height": m005.ImageWithHtmlHeight,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
