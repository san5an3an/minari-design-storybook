import * as m000 from "./configurator";
import * as m001 from "./states";
import * as m002 from "./tooltip";
import * as m003 from "./group";
import * as m004 from "./deselect";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "states": m001.states,
  "tooltip": m002.tooltip,
  "group": m003.group,
  "deselect": m004.deselect,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "icon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
