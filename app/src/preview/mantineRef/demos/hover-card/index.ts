import * as m000 from "../_src/demos/core/HoverCard/HoverCard.demo.usage";
import * as m001 from "../_src/demos/core/HoverCard/HoverCard.demo.delay";
import * as m002 from "../_src/demos/core/HoverCard/HoverCard.demo.profile";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "delay": m001.delay,
  "profile": m002.profile,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
