import * as m000 from "../_src/demos/core/Divider/Divider.demo.usage";
import * as m001 from "../_src/demos/core/Divider/Divider.demo.variants";
import * as m002 from "../_src/demos/core/Divider/Divider.demo.labels";
import * as m003 from "../_src/demos/core/Divider/Divider.demo.sizes";
import * as m004 from "../_src/demos/core/Divider/Divider.demo.orientation";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "variants": m001.variants,
  "labels": m002.labels,
  "sizes": m003.sizes,
  "orientation": m004.orientation,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
