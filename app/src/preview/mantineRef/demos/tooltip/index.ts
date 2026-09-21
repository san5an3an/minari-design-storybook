import * as m000 from "../_src/demos/core/Tooltip/Tooltip.demo.usage";
import * as m001 from "../_src/demos/core/Tooltip/Tooltip.demo.configurator";
import * as m002 from "../_src/demos/core/Tooltip/Tooltip.demo.offset";
import * as m003 from "../_src/demos/core/Tooltip/Tooltip.demo.offsetAxis";
import * as m004 from "../_src/demos/core/Tooltip/Tooltip.demo.arrow";
import * as m005 from "../_src/demos/core/Tooltip/Tooltip.demo.controlled";
import * as m006 from "../_src/demos/core/Tooltip/Tooltip.demo.multiline";
import * as m007 from "../_src/demos/core/Tooltip/Tooltip.demo.inline";
import * as m008 from "../_src/demos/core/Tooltip/Tooltip.demo.transitions";
import * as m009 from "../_src/demos/core/Tooltip/Tooltip.demo.delay";
import * as m010 from "../_src/demos/core/Tooltip/Tooltip.demo.group";
import * as m011 from "../_src/demos/core/Tooltip/Tooltip.demo.floating";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "offset": m002.offset,
  "offsetAxis": m003.offsetAxis,
  "arrow": m004.arrow,
  "controlled": m005.controlled,
  "multiline": m006.multiline,
  "inline": m007.inline,
  "transitions": m008.transitions,
  "delay": m009.delay,
  "group": m010.group,
  "floating": m011.floating,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
