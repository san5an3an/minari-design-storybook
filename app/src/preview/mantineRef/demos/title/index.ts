import * as m000 from "./usage";
import * as m001 from "./size";
import * as m002 from "./textWrap";
import * as m003 from "./lineClamp";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "size": m001.size,
  "textWrap": m002.textWrap,
  "lineClamp": m003.lineClamp,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
