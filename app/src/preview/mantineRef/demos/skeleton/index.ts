import * as m000 from "../_src/demos/core/Skeleton/Skeleton.demo.configurator";
import * as m001 from "../_src/demos/core/Skeleton/Skeleton.demo.content";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "content": m001.content,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
