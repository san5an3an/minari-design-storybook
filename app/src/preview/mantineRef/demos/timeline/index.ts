import * as m000 from "../_src/demos/core/Timeline/Timeline.demo.usage";
import * as m001 from "../_src/demos/core/Timeline/Timeline.demo.configurator";
import * as m002 from "../_src/demos/core/Timeline/Timeline.demo.bullet";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "bullet": m002.bullet,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
