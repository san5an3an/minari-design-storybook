import * as m000 from "./usage";
import * as m001 from "./configurator";
import * as m002 from "./tooltip";
import * as m003 from "./rootColor";
import * as m004 from "./sectionsProps";
import * as m005 from "./transitions";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "tooltip": m002.tooltip,
  "rootColor": m003.rootColor,
  "sectionsProps": m004.sectionsProps,
  "transitions": m005.transitions,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "label": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
