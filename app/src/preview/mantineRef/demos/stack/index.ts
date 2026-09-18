import * as m000 from "./configurator";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
