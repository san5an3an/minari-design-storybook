import * as m000 from "./configurator";
import * as m001 from "./inline";
import * as m002 from "./offset";
import * as m003 from "./processing";
import * as m004 from "./disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "inline": m001.inline,
  "offset": m002.offset,
  "processing": m003.processing,
  "disabled": m004.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
