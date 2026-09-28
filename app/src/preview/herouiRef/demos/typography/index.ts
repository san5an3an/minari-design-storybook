/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./default";
import * as m001 from "./typography-scale";
import * as m002 from "./primitives";
import * as m003 from "./prose";
import * as m004 from "./render-props";
import * as m005 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "default": m000.Default,
  "typography-scale": m001.TypographyScale,
  "primitives": m002.Primitives,
  "prose": m003.Prose,
  "render-props": m004.RenderProps,
  "custom-styles": m005.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
