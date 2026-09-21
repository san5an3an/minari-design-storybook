/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./aspect-ratio-basic";
import * as m001 from "./aspect-ratio-with-image";
import * as m002 from "./aspect-ratio-with-video";
import * as m003 from "./aspect-ratio-with-map";
import * as m004 from "./aspect-ratio-responsive";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "aspect-ratio-basic": m000.AspectRatioBasic,
  "aspect-ratio-with-image": m001.AspectRatioWithImage,
  "aspect-ratio-with-video": m002.AspectRatioWithVideo,
  "aspect-ratio-with-map": m003.AspectRatioWithMap,
  "aspect-ratio-responsive": m004.AspectRatioResponsive,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
