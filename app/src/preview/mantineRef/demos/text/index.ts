import * as m000 from "../_src/demos/core/Text/Text.demo.usage";
import * as m001 from "../_src/demos/core/Text/Text.demo.gradient";
import * as m002 from "../_src/demos/core/Text/Text.demo.truncate";
import * as m003 from "../_src/demos/core/Text/Text.demo.linesConfigurator";
import * as m004 from "../_src/demos/core/Text/Text.demo.lineClamp";
import * as m005 from "../_src/demos/core/Text/Text.demo.inherit";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "gradient": m001.gradient,
  "truncate": m002.truncate,
  "linesConfigurator": m003.linesConfigurator,
  "lineClamp": m004.lineClamp,
  "inherit": m005.inherit,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
