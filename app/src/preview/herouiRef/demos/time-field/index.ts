/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./with-prefix-icon";
import * as m002 from "./with-suffix-icon";
import * as m003 from "./with-prefix-and-suffix";
import * as m004 from "./on-surface";
import * as m005 from "./with-description";
import * as m006 from "./required";
import * as m007 from "./disabled";
import * as m008 from "./full-width";
import * as m009 from "./invalid";
import * as m010 from "./controlled";
import * as m011 from "./form-example";
import * as m012 from "./with-validation";
import * as m013 from "./render-function";
import * as m014 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "with-prefix-icon": m001.WithPrefixIcon,
  "with-suffix-icon": m002.WithSuffixIcon,
  "with-prefix-and-suffix": m003.WithPrefixAndSuffix,
  "on-surface": m004.OnSurface,
  "with-description": m005.WithDescription,
  "required": m006.Required,
  "disabled": m007.Disabled,
  "full-width": m008.FullWidth,
  "invalid": m009.Invalid,
  "controlled": m010.Controlled,
  "form-example": m011.FormExample,
  "with-validation": m012.WithValidation,
  "render-function": m013.RenderFunction,
  "custom-styles": m014.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
