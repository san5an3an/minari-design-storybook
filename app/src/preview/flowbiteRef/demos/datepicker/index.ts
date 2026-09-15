import * as m000 from "./datepicker.root";
import * as m001 from "./datepicker.localization";
import * as m002 from "./datepicker.filter";
import * as m003 from "./datepicker.range";
import * as m004 from "./datepicker.weekStart";
import * as m005 from "./datepicker.autoHide";
import * as m006 from "./datepicker.title";
import * as m007 from "./datepicker.inline";
import * as m008 from "./datepicker.value";

export const DEMOS: Record<string, { component: unknown }> = {
  "datepicker.root": m000.root,
  "datepicker.localization": m001.localization,
  "datepicker.filter": m002.filter,
  "datepicker.range": m003.range,
  "datepicker.weekStart": m004.weekStart,
  "datepicker.autoHide": m005.autoHide,
  "datepicker.title": m006.title,
  "datepicker.inline": m007.inline,
  "datepicker.value": m008.value,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
