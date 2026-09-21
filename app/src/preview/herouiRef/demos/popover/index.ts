import * as m000 from "./basic";
import * as m001 from "./with-arrow";
import * as m002 from "./interactive";
import * as m003 from "./placement";
import * as m004 from "./render-function";
import * as m005 from "./custom-styles";

export const DEMOS = {
  "basic": m000.PopoverBasic,
  "with-arrow": m001.PopoverWithArrow,
  "interactive": m002.PopoverInteractive,
  "placement": m003.PopoverPlacement,
  "render-function": m004.RenderFunction,
  "custom-styles": m005.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
