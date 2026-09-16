/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./disabled";
import * as m002 from "./controlled";
import * as m003 from "./with-validation";
import * as m004 from "./format-options";
import * as m005 from "./form-example";
import * as m006 from "./render-function";
import * as m007 from "./international-calendar";
import * as m008 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "disabled": m001.Disabled,
  "controlled": m002.Controlled,
  "with-validation": m003.WithValidation,
  "format-options": m004.FormatOptions,
  "form-example": m005.FormExample,
  "render-function": m006.RenderFunction,
  "international-calendar": m007.InternationalCalendar,
  "custom-styles": m008.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "with-custom-indicator": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
};
