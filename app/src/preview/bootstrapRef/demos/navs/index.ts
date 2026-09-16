import m000 from "./Basic";
import m001 from "./List";
import m002 from "./Alignment";
import m003 from "./Stacked";
import m004 from "./Tabs";
import m005 from "./Pills";
import m006 from "./Underline";
import m007 from "./Fill";
import m008 from "./Justified";
import m009 from "./DropdownImpl";
import m010 from "./Dropdown";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "List": m001,
  "Alignment": m002,
  "Stacked": m003,
  "Tabs": m004,
  "Pills": m005,
  "Underline": m006,
  "Fill": m007,
  "Justified": m008,
  "DropdownImpl": m009,
  "Dropdown": m010,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
