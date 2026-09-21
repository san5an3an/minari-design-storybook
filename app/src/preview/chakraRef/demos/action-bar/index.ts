import * as m000 from "./action-bar-basic";
import * as m001 from "./action-bar-with-close-trigger";
import * as m002 from "./action-bar-with-dialog";
import * as m003 from "./action-bar-placement";

export const DEMOS = {
  "action-bar-basic": m000.ActionBarBasic,
  "action-bar-with-close-trigger": m001.ActionBarWithCloseTrigger,
  "action-bar-with-dialog": m002.ActionBarWithDialog,
  "action-bar-placement": m003.ActionBarPlacement,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
