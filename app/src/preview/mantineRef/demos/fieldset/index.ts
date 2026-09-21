import * as m000 from "../_src/demos/core/Fieldset/Fieldset.demo.usage";
import * as m001 from "../_src/demos/core/Fieldset/Fieldset.demo.disabled";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "disabled": m001.disabled,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
