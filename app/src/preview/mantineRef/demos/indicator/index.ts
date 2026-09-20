import * as m000 from "../_src/demos/core/Indicator/Indicator.demo.configurator";
import * as m001 from "../_src/demos/core/Indicator/Indicator.demo.inline";
import * as m002 from "../_src/demos/core/Indicator/Indicator.demo.offset";
import * as m003 from "../_src/demos/core/Indicator/Indicator.demo.processing";
import * as m004 from "../_src/demos/core/Indicator/Indicator.demo.disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "inline": m001.inline,
  "offset": m002.offset,
  "processing": m003.processing,
  "disabled": m004.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
