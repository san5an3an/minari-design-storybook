import m000 from "./Types";
import m001 from "./OutlineTypes";
import m002 from "./TagTypes";
import m003 from "./Sizes";
import m004 from "./Block";
import m005 from "./Active";
import m006 from "./Disabled";
import m007 from "./Loading";
import m008 from "./ToggleButton";
import m009 from "./ToggleButtonGroupUncontrolled";
import m010 from "./ToggleButtonGroupControlled";

export const DEMOS: Record<string, unknown> = {
  "Types": m000,
  "OutlineTypes": m001,
  "TagTypes": m002,
  "Sizes": m003,
  "Block": m004,
  "Active": m005,
  "Disabled": m006,
  "Loading": m007,
  "ToggleButton": m008,
  "ToggleButtonGroupUncontrolled": m009,
  "ToggleButtonGroupControlled": m010,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
