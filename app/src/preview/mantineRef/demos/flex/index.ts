import * as m000 from "../_src/demos/core/Flex/Flex.demo.configurator";
import * as m001 from "../_src/demos/core/Flex/Flex.demo.responsive";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "responsive": m001.responsive,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
