import * as m000 from "./basic";
import * as m001 from "./on-surface";
import * as m002 from "./with-description";
import * as m003 from "./required";
import * as m004 from "./disabled";
import * as m005 from "./full-width";
import * as m006 from "./validation";
import * as m007 from "./controlled";
import * as m008 from "./with-error";
import * as m009 from "./textarea";
import * as m010 from "./input-types";
import * as m011 from "./render-function";
import * as m012 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "on-surface": m001.OnSurface,
  "with-description": m002.WithDescription,
  "required": m003.Required,
  "disabled": m004.Disabled,
  "full-width": m005.FullWidth,
  "validation": m006.Validation,
  "controlled": m007.Controlled,
  "with-error": m008.WithError,
  "textarea": m009.TextAreaExample,
  "input-types": m010.InputTypes,
  "render-function": m011.RenderFunction,
  "custom-styles": m012.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
