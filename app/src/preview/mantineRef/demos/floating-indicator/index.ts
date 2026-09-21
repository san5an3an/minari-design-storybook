import * as m000 from "../_src/demos/core/FloatingIndicator/FloatingIndicator.demo.segmented";
import * as m001 from "../_src/demos/core/FloatingIndicator/FloatingIndicator.demo.direction";
import * as m002 from "../_src/demos/core/FloatingIndicator/FloatingIndicator.demo.tabs";

export const DEMOS: Record<string, { component: unknown }> = {
  "segmented": m000.segmented,
  "direction": m001.direction,
  "tabs": m002.tabs,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
