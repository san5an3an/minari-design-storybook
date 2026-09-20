import * as m000 from "../_src/demos/core/Tooltip/Tooltip.demo.transitions";
import * as m001 from "../_src/demos/core/Transition/Transition.demo.custom";
import * as m002 from "../_src/demos/core/Transition/Transition.demo.delay";

export const DEMOS: Record<string, { component: unknown }> = {
  "transitions": m000.transitions,
  "custom": m001.custom,
  "delay": m002.delay,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
