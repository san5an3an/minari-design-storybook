import * as m000 from "./visually-hidden-basic";
import * as m001 from "./visually-hidden-with-input";

export const DEMOS = {
  "visually-hidden-basic": m000.VisuallyHiddenBasic,
  "visually-hidden-with-input": m001.VisuallyHiddenWithInput,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
