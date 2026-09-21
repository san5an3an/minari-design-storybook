import * as m000 from "./tabs.root";
import * as m001 from "./tabs.withUnderline";
import * as m002 from "./tabs.withIcons";
import * as m003 from "./tabs.withPills";
import * as m004 from "./tabs.fullWidth";
import * as m005 from "./tabs.stateOptions";

export const DEMOS: Record<string, { component: unknown }> = {
  "tabs.root": m000.root,
  "tabs.withUnderline": m001.withUnderline,
  "tabs.withIcons": m002.withIcons,
  "tabs.withPills": m003.withPills,
  "tabs.fullWidth": m004.fullWidth,
  "tabs.stateOptions": m005.stateOptions,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
