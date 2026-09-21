import * as m000 from "../_src/demos/core/NumberFormatter/NumberFormatter.demo.usage";
import * as m001 from "../_src/demos/core/NumberFormatter/NumberFormatter.demo.prefixSuffix";
import * as m002 from "../_src/demos/core/NumberFormatter/NumberFormatter.demo.thousandsSeparator";
import * as m003 from "../_src/demos/core/NumberFormatter/NumberFormatter.demo.decimalScale";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "prefixSuffix": m001.prefixSuffix,
  "thousandsSeparator": m002.thousandsSeparator,
  "decimalScale": m003.decimalScale,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
