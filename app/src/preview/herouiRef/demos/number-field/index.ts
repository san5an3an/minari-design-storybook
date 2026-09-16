import * as m000 from "./basic";
import * as m001 from "./variants";
import * as m002 from "./on-surface";
import * as m003 from "./with-description";
import * as m004 from "./required";
import * as m005 from "./disabled";
import * as m006 from "./full-width";
import * as m007 from "./validation";
import * as m008 from "./controlled";
import * as m009 from "./with-step";
import * as m010 from "./with-format-options";
import * as m011 from "./form-example";
import * as m012 from "./with-validation";
import * as m013 from "./custom-icons";
import * as m014 from "./with-chevrons";
import * as m015 from "./render-function";
import * as m016 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "variants": m001.Variants,
  "on-surface": m002.OnSurface,
  "with-description": m003.WithDescription,
  "required": m004.Required,
  "disabled": m005.Disabled,
  "full-width": m006.FullWidth,
  "validation": m007.Validation,
  "controlled": m008.Controlled,
  "with-step": m009.WithStep,
  "with-format-options": m010.WithFormatOptions,
  "form-example": m011.FormExample,
  "with-validation": m012.WithValidation,
  "custom-icons": m013.CustomIcons,
  "with-chevrons": m014.WithChevrons,
  "render-function": m015.RenderFunction,
  "custom-styles": m016.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
