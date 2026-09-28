/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./container-basic";
import * as m001 from "./container-with-sizes";
import * as m002 from "./container-with-fluid";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "container-basic": m000.ContainerBasic,
  "container-with-sizes": m001.ContainerWithSizes,
  "container-with-fluid": m002.ContainerWithFluid,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
