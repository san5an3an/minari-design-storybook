/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./basic";
import * as m001 from "./with-prefix-icon";
import * as m002 from "./with-suffix-icon";
import * as m003 from "./with-prefix-and-suffix";
import * as m004 from "./variants";
import * as m005 from "./on-surface";
import * as m006 from "./with-description";
import * as m007 from "./required";
import * as m008 from "./disabled";
import * as m009 from "./full-width";
import * as m010 from "./invalid";
import * as m011 from "./granularity";
import * as m012 from "./controlled";
import * as m013 from "./form-example";
import * as m014 from "./with-validation";
import * as m015 from "./render-function";
import * as m016 from "./custom-styles";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "basic": m000.Basic,
  "with-prefix-icon": m001.WithPrefixIcon,
  "with-suffix-icon": m002.WithSuffixIcon,
  "with-prefix-and-suffix": m003.WithPrefixAndSuffix,
  "variants": m004.Variants,
  "on-surface": m005.OnSurface,
  "with-description": m006.WithDescription,
  "required": m007.Required,
  "disabled": m008.Disabled,
  "full-width": m009.FullWidth,
  "invalid": m010.Invalid,
  "granularity": m011.Granularity,
  "controlled": m012.Controlled,
  "form-example": m013.FormExample,
  "with-validation": m014.WithValidation,
  "render-function": m015.RenderFunction,
  "custom-styles": m016.CustomStyles,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
