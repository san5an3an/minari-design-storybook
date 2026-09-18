import * as m000 from "./configurator";
import * as m001 from "./content";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "content": m001.content,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
