/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./shapes";
import * as m003 from "./transparency";
import * as m004 from "./render-function";
import * as m005 from "./accessibility";
import * as m006 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.ColorSwatchBasic,
  "sizes": m001.ColorSwatchSizes,
  "shapes": m002.ColorSwatchShapes,
  "transparency": m003.ColorSwatchTransparency,
  "render-function": m004.RenderFunction,
  "accessibility": m005.ColorSwatchAccessibility,
  "custom-styles": m006.ColorSwatchCustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
