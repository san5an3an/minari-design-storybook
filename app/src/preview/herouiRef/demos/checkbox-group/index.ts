/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./on-surface";
import * as m002 from "./disabled";
import * as m003 from "./indeterminate";
import * as m004 from "./controlled";
import * as m005 from "./validation";
import * as m006 from "./with-custom-indicator";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "on-surface": m001.OnSurface,
  "disabled": m002.Disabled,
  "indeterminate": m003.Indeterminate,
  "controlled": m004.Controlled,
  "validation": m005.Validation,
  "with-custom-indicator": m006.WithCustomIndicator,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "features-and-addons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
