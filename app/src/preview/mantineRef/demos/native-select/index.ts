import * as m000 from "../_src/demos/core/NativeSelect/NativeSelect.demo.usage";
import * as m001 from "../_src/demos/core/NativeSelect/NativeSelect.demo.data";
import * as m002 from "../_src/demos/core/NativeSelect/NativeSelect.demo.options";
import * as m003 from "../_src/demos/core/NativeSelect/NativeSelect.demo.dividers";
import * as m004 from "../_src/demos/core/NativeSelect/NativeSelect.demo.sections";
import * as m005 from "../_src/demos/core/NativeSelect/NativeSelect.demo.disabled";
import * as m006 from "../_src/demos/core/NativeSelect/NativeSelect.demo.error";
import * as m007 from "../_src/demos/core/NativeSelect/NativeSelect.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "data": m001.data,
  "options": m002.options,
  "dividers": m003.dividers,
  "sections": m004.sections,
  "disabled": m005.disabled,
  "error": m006.error,
  "stylesApi": m007.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
