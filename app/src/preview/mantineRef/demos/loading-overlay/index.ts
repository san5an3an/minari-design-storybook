import * as m000 from "../_src/demos/core/LoadingOverlay/LoadingOverlay.demo.usage";
import * as m001 from "../_src/demos/core/LoadingOverlay/LoadingOverlay.demo.loaderProps";
import * as m002 from "../_src/demos/core/LoadingOverlay/LoadingOverlay.demo.customLoader";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "loaderProps": m001.loaderProps,
  "customLoader": m002.customLoader,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
