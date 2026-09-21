import * as m000 from "../_src/demos/core/List/List.demo.configurator";
import * as m001 from "../_src/demos/core/List/List.demo.icon";
import * as m002 from "../_src/demos/core/List/List.demo.nested";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "icon": m001.icon,
  "nested": m002.nested,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
