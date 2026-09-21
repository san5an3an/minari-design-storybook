import * as m000 from "../_src/demos/core/Loader/Loader.demo.configurator";
import * as m001 from "../_src/demos/core/Loader/Loader.demo.size";
import * as m002 from "../_src/demos/core/Loader/Loader.demo.cssLoader";
import * as m003 from "../_src/demos/core/Loader/Loader.demo.customType";
import * as m004 from "../_src/demos/core/LoadingOverlay/LoadingOverlay.demo.customLoader";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "size": m001.size,
  "cssLoader": m002.cssLoader,
  "customType": m003.customType,
  "customLoader": m004.customLoader,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
