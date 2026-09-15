import * as m000 from "./tooltip.root";
import * as m001 from "./tooltip.styles";
import * as m002 from "./tooltip.placement";
import * as m003 from "./tooltip.trigger";
import * as m004 from "./tooltip.animation";
import * as m005 from "./tooltip.disableArrow";

export const DEMOS: Record<string, { component: unknown }> = {
  "tooltip.root": m000.root,
  "tooltip.styles": m001.styles,
  "tooltip.placement": m002.placement,
  "tooltip.trigger": m003.trigger,
  "tooltip.animation": m004.animation,
  "tooltip.disableArrow": m005.disableArrow,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
