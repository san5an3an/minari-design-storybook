import * as m000 from "../_src/demos/core/PillsInput/PillsInput.demo.usage";
import * as m001 from "../_src/demos/core/PillsInput/PillsInput.demo.configurator";
import * as m002 from "../_src/demos/core/Combobox/Combobox.demo.searchableMultiselect";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "searchableMultiselect": m002.searchableMultiselect,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
