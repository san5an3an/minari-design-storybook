import * as m000 from "./bleed-basic";
import * as m001 from "./bleed-vertical";
import * as m002 from "./bleed-with-direction";

export const DEMOS = {
  "bleed-basic": m000.BleedBasic,
  "bleed-vertical": m001.BleedVertical,
  "bleed-with-direction": m002.BleedWithDirection,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
