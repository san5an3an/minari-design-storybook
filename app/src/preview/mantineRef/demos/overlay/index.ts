import * as m000 from "../_src/demos/core/Overlay/Overlay.demo.usage";
import * as m001 from "../_src/demos/core/Overlay/Overlay.demo.gradient";
import * as m002 from "../_src/demos/core/Overlay/Overlay.demo.blur";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "gradient": m001.gradient,
  "blur": m002.blur,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
