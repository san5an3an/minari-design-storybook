import * as m000 from "../_src/demos/core/Highlight/Highlight.demo.usage";
import * as m001 from "../_src/demos/core/Highlight/Highlight.demo.multiple";
import * as m002 from "../_src/demos/core/Highlight/Highlight.demo.styles";
import * as m003 from "../_src/demos/core/Highlight/Highlight.demo.props";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "multiple": m001.multiple,
  "styles": m002.styles,
  "props": m003.props,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
