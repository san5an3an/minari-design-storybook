import m000 from "./Basic";
import m001 from "./Sizes";
import m002 from "./Checkboxes";
import m003 from "./MultipleInputs";
import m004 from "./MultipleAddons";
import m005 from "./Buttons";
import m006 from "./ButtonDropdowns";
import m007 from "./SegmentedButtonDropdowns";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Sizes": m001,
  "Checkboxes": m002,
  "MultipleInputs": m003,
  "MultipleAddons": m004,
  "Buttons": m005,
  "ButtonDropdowns": m006,
  "SegmentedButtonDropdowns": m007,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
