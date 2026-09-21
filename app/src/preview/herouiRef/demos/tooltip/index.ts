import * as m000 from "./basic";
import * as m001 from "./placement";
import * as m002 from "./with-arrow";
import * as m003 from "./custom-trigger";
import * as m004 from "./render-function";
import * as m005 from "./custom-styles";

export const DEMOS = {
  "basic": m000.TooltipBasic,
  "placement": m001.TooltipPlacement,
  "with-arrow": m002.TooltipWithArrow,
  "custom-trigger": m003.TooltipCustomTrigger,
  "render-function": m004.RenderFunction,
  "custom-styles": m005.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
