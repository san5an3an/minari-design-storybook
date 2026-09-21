import * as m000 from "../_src/demos/core/Chip/Chip.demo.configurator";
import * as m001 from "../_src/demos/core/Chip/Chip.demo.icon";
import * as m002 from "../_src/demos/core/Chip/Chip.demo.states";
import * as m003 from "../_src/demos/core/Chip/Chip.demo.tooltip";
import * as m004 from "../_src/demos/core/Chip/Chip.demo.group";
import * as m005 from "../_src/demos/core/Chip/Chip.demo.deselect";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "icon": m001.icon,
  "states": m002.states,
  "tooltip": m003.tooltip,
  "group": m004.group,
  "deselect": m005.deselect,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
