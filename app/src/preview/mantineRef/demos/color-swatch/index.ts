import * as m000 from "../_src/demos/core/ColorSwatch/ColorSwatch.demo.usage";
import * as m001 from "../_src/demos/core/ColorSwatch/ColorSwatch.demo.shadow";
import * as m002 from "../_src/demos/core/ColorSwatch/ColorSwatch.demo.component";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "shadow": m001.shadow,
  "component": m002.component,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
