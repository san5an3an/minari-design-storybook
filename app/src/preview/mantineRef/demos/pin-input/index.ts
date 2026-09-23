import * as m000 from "../_src/demos/core/PinInput/PinInput.demo.configurator";
import * as m001 from "../_src/demos/core/PinInput/PinInput.demo.regexp";
import * as m002 from "../_src/demos/core/PinInput/PinInput.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "regexp": m001.regexp,
  "stylesApi": m002.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
