import * as m000 from "../_src/demos/core/Popover/Popover.demo.usage";
import * as m001 from "../_src/demos/core/Popover/Popover.demo.hover";
import * as m002 from "../_src/demos/core/Popover/Popover.demo.form";
import * as m003 from "../_src/demos/core/Popover/Popover.demo.inline";
import * as m004 from "../_src/demos/core/Popover/Popover.demo.sameWidth";
import * as m005 from "../_src/demos/core/Popover/Popover.demo.offset";
import * as m006 from "../_src/demos/core/Popover/Popover.demo.offsetAxis";
import * as m007 from "../_src/demos/core/Popover/Popover.demo.arrow";
import * as m008 from "../_src/demos/core/Popover/Popover.demo.overlay";
import * as m009 from "../_src/demos/core/Popover/Popover.demo.disabled";
import * as m010 from "../_src/demos/core/Popover/Popover.demo.clickOutsideEvents";
import * as m011 from "../_src/demos/core/Popover/Popover.demo.portalChildren";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "hover": m001.hover,
  "form": m002.form,
  "inline": m003.inline,
  "sameWidth": m004.sameWidth,
  "offset": m005.offset,
  "offsetAxis": m006.offsetAxis,
  "arrow": m007.arrow,
  "overlay": m008.overlay,
  "disabled": m009.disabled,
  "clickOutsideEvents": m010.clickOutsideEvents,
  "portalChildren": m011.portalChildren,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
