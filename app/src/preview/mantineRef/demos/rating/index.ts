import * as m000 from "../_src/demos/core/Rating/Rating.demo.configurator";
import * as m001 from "../_src/demos/core/Rating/Rating.demo.readOnly";
import * as m002 from "../_src/demos/core/Rating/Rating.demo.fractions";
import * as m003 from "../_src/demos/core/Rating/Rating.demo.symbol";
import * as m004 from "../_src/demos/core/Rating/Rating.demo.customSymbol";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "readOnly": m001.readOnly,
  "fractions": m002.fractions,
  "symbol": m003.symbol,
  "customSymbol": m004.customSymbol,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
