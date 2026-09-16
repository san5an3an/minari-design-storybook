import m000 from "./FormGroup";
import m001 from "./GridBasic";
import m002 from "./GridComplex";
import m003 from "./Horizontal";
import m004 from "./FormLabelSizing";
import m005 from "./GridColSizes";
import m006 from "./GridAutoSizing";
import m007 from "./GridAutoSizingColMix";

export const DEMOS: Record<string, unknown> = {
  "FormGroup": m000,
  "GridBasic": m001,
  "GridComplex": m002,
  "Horizontal": m003,
  "FormLabelSizing": m004,
  "GridColSizes": m005,
  "GridAutoSizing": m006,
  "GridAutoSizingColMix": m007,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
