import * as m000 from "../_src/demos/core/Collapse/Collapse.demo.usage";
import * as m001 from "../_src/demos/core/Collapse/Collapse.demo.transition";
import * as m002 from "../_src/demos/core/Collapse/Collapse.demo.nested";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "transition": m001.transition,
  "nested": m002.nested,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
