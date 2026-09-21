import * as m000 from "../_src/demos/core/TableOfContents/TableOfContents.demo.usage";
import * as m001 from "../_src/demos/core/TableOfContents/TableOfContents.demo.depthOffset";
import * as m002 from "../_src/demos/core/TableOfContents/TableOfContents.demo.autoContrast";
import * as m003 from "../_src/demos/core/TableOfContents/TableOfContents.demo.styles";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "depthOffset": m001.depthOffset,
  "autoContrast": m002.autoContrast,
  "styles": m003.styles,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
