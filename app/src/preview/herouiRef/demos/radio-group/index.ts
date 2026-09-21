import * as m000 from "./basic";
import * as m001 from "./horizontal";
import * as m002 from "./variants";
import * as m003 from "./on-surface";
import * as m004 from "./disabled";
import * as m005 from "./controlled";
import * as m006 from "./uncontrolled";
import * as m007 from "./validation";
import * as m008 from "./delivery-and-payment";
import * as m009 from "./custom-indicator";
import * as m010 from "./render-function";
import * as m011 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "horizontal": m001.Horizontal,
  "variants": m002.Variants,
  "on-surface": m003.OnSurface,
  "disabled": m004.Disabled,
  "controlled": m005.Controlled,
  "uncontrolled": m006.Uncontrolled,
  "validation": m007.Validation,
  "delivery-and-payment": m008.DeliveryAndPayment,
  "custom-indicator": m009.CustomIndicator,
  "render-function": m010.RenderFunction,
  "custom-styles": m011.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
