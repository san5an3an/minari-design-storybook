/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./level-2";
import * as m002 from "./level-3";
import * as m003 from "./disabled";
import * as m004 from "./custom-separator";
import * as m005 from "./render-function";
import * as m006 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.default,
  "level-2": m001.default,
  "level-3": m002.default,
  "disabled": m003.default,
  "custom-separator": m004.default,
  "render-function": m005.RenderFunction,
  "custom-styles": m006.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
