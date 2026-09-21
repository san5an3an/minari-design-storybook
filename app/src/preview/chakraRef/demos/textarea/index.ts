import * as m000 from "./textarea-basic";
import * as m001 from "./textarea-with-variants";
import * as m002 from "./textarea-with-sizes";
import * as m003 from "./textarea-with-helper-text";
import * as m004 from "./textarea-with-error-text";
import * as m005 from "./input-with-field";
import * as m007 from "./textarea-with-resize";
import * as m008 from "./textarea-with-autoresize";

export const DEMOS = {
  "textarea-basic": m000.TextareaBasic,
  "textarea-with-variants": m001.TextareaWithVariants,
  "textarea-with-sizes": m002.TextareaWithSizes,
  "textarea-with-helper-text": m003.TextareaWithHelperText,
  "textarea-with-error-text": m004.TextareaWithErrorText,
  "input-with-field": m005.InputWithField,
  "textarea-with-resize": m007.TextareaWithResize,
  "textarea-with-autoresize": m008.TextareaWithAutoresize,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "textarea-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-hook-form"},
};
