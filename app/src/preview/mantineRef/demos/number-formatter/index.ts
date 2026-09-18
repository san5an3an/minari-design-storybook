import * as m000 from "./usage";
import * as m001 from "./prefixSuffix";
import * as m002 from "./thousandsSeparator";
import * as m003 from "./decimalScale";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "prefixSuffix": m001.prefixSuffix,
  "thousandsSeparator": m002.thousandsSeparator,
  "decimalScale": m003.decimalScale,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
