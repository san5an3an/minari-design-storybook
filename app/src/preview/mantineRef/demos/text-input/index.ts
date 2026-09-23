import * as m000 from "../_src/demos/core/TextInput/TextInput.demo.usage";
import * as m001 from "../_src/demos/core/TextInput/TextInput.demo.sections";
import * as m002 from "../_src/demos/core/TextInput/TextInput.demo.error";
import * as m003 from "../_src/demos/core/TextInput/TextInput.demo.disabled";
import * as m004 from "../_src/demos/core/TextInput/TextInput.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "sections": m001.sections,
  "error": m002.error,
  "disabled": m003.disabled,
  "stylesApi": m004.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
