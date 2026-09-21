import * as m000 from "../_src/demos/core/SimpleGrid/SimpleGrid.demo.usage";
import * as m001 from "../_src/demos/core/SimpleGrid/SimpleGrid.demo.responsive";
import * as m002 from "../_src/demos/core/SimpleGrid/SimpleGrid.demo.container";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "responsive": m001.responsive,
  "container": m002.container,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
