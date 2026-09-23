import * as m000 from "../_src/demos/core/Alert/Alert.demo.configurator";
import * as m001 from "../_src/demos/core/Alert/Alert.demo.stylesApi";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "stylesApi": m001.stylesApi,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
