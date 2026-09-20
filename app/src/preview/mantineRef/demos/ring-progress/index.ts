import * as m000 from "../_src/demos/core/RingProgress/RingProgress.demo.usage";
import * as m001 from "../_src/demos/core/RingProgress/RingProgress.demo.configurator";
import * as m002 from "../_src/demos/core/RingProgress/RingProgress.demo.tooltip";
import * as m003 from "../_src/demos/core/RingProgress/RingProgress.demo.rootColor";
import * as m004 from "../_src/demos/core/RingProgress/RingProgress.demo.sectionsProps";
import * as m005 from "../_src/demos/core/RingProgress/RingProgress.demo.label";
import * as m006 from "../_src/demos/core/RingProgress/RingProgress.demo.transitions";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "tooltip": m002.tooltip,
  "rootColor": m003.rootColor,
  "sectionsProps": m004.sectionsProps,
  "label": m005.label,
  "transitions": m006.transitions,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
