import * as m000 from "./usage";
import * as m001 from "./multiple";
import * as m002 from "./styles";
import * as m003 from "./props";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "multiple": m001.multiple,
  "styles": m002.styles,
  "props": m003.props,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
