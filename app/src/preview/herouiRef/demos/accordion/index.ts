/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./surface";
import * as m002 from "./without-separator";
import * as m003 from "./multiple";
import * as m004 from "./disabled";
import * as m005 from "./controlled";
import * as m006 from "./custom-indicator";
import * as m007 from "./render-function";
import * as m008 from "./faq";
import * as m009 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "surface": m001.Surface,
  "without-separator": m002.WithoutSeparator,
  "multiple": m003.Multiple,
  "disabled": m004.Disabled,
  "controlled": m005.Controlled,
  "custom-indicator": m006.CustomIndicator,
  "render-function": m007.RenderFunction,
  "faq": m008.FAQ,
  "custom-styles": m009.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
