import * as m000 from "../_src/demos/core/Title/Title.demo.usage";
import * as m001 from "../_src/demos/core/Title/Title.demo.size";
import * as m002 from "../_src/demos/core/Title/Title.demo.textWrap";
import * as m003 from "../_src/demos/core/Title/Title.demo.lineClamp";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "size": m001.size,
  "textWrap": m002.textWrap,
  "lineClamp": m003.lineClamp,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
