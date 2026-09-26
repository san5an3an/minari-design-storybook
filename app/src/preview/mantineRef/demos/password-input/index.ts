import * as m000 from "../_src/demos/core/PasswordInput/PasswordInput.demo.usage";
import * as m001 from "../_src/demos/core/PasswordInput/PasswordInput.demo.controlledVisibility";
import * as m002 from "../_src/demos/core/PasswordInput/PasswordInput.demo.visibilityIcon";
import * as m003 from "../_src/demos/core/PasswordInput/PasswordInput.demo.strengthMeter";
import * as m004 from "../_src/demos/core/PasswordInput/PasswordInput.demo.sections";
import * as m005 from "../_src/demos/core/PasswordInput/PasswordInput.demo.error";
import * as m006 from "../_src/demos/core/PasswordInput/PasswordInput.demo.disabled";
import * as m007 from "../_src/demos/core/PasswordInput/PasswordInput.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "controlledVisibility": m001.controlledVisibility,
  "visibilityIcon": m002.visibilityIcon,
  "strengthMeter": m003.strengthMeter,
  "sections": m004.sections,
  "error": m005.error,
  "disabled": m006.disabled,
  "stylesApi": m007.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
