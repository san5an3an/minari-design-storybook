import m000 from "./TextControls";
import m001 from "./InputSizes";
import m002 from "./FormControlDisabled";
import m003 from "./InputReadOnly";
import m004 from "./Plaintext";
import m005 from "./FormFile";
import m006 from "./ColorPicker";

export const DEMOS: Record<string, unknown> = {
  "TextControls": m000,
  "InputSizes": m001,
  "FormControlDisabled": m002,
  "InputReadOnly": m003,
  "Plaintext": m004,
  "FormFile": m005,
  "ColorPicker": m006,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
