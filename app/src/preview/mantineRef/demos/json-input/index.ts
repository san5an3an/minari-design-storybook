import * as m000 from "../_src/demos/core/JsonInput/JsonInput.demo.usage";
import * as m001 from "../_src/demos/core/JsonInput/JsonInput.demo.configurator";
import * as m002 from "../_src/demos/core/JsonInput/JsonInput.demo.disabled";
import * as m003 from "../_src/demos/core/JsonInput/JsonInput.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "configurator": m001.configurator,
  "disabled": m002.disabled,
  "stylesApi": m003.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
