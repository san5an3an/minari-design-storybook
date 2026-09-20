import * as m000 from "../_src/demos/core/Container/Container.demo.usage";
import * as m001 from "../_src/demos/core/Container/Container.demo.fluid";
import * as m002 from "../_src/demos/core/Container/Container.demo.sizes";
import * as m003 from "../_src/demos/core/Container/Container.demo.responsive";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "fluid": m001.fluid,
  "sizes": m002.sizes,
  "responsive": m003.responsive,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
