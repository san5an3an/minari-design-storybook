import * as m000 from "../_src/demos/core/CopyButton/CopyButton.demo.usage";
import * as m001 from "../_src/demos/core/CopyButton/CopyButton.demo.timeout";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "timeout": m001.timeout,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
