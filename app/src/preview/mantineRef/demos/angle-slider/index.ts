import * as m000 from "./usage";
import * as m001 from "./formatLabel";
import * as m002 from "./marks";
import * as m003 from "./onChangeEnd";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "formatLabel": m001.formatLabel,
  "marks": m002.marks,
  "onChangeEnd": m003.onChangeEnd,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
