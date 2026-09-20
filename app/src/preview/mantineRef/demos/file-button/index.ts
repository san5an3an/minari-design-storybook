import * as m000 from "../_src/demos/core/FileButton/FileButton.demo.usage";
import * as m001 from "../_src/demos/core/FileButton/FileButton.demo.multiple";
import * as m002 from "../_src/demos/core/FileButton/FileButton.demo.reset";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "multiple": m001.multiple,
  "reset": m002.reset,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
