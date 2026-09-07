import type { DemoSet } from "../types";
import D0 from "./00-radio-buttons-group";
import D1 from "./01-row-radio-buttons-group";
import D2 from "./02-controlled-radio-buttons-group";
import D3 from "./03-radio-buttons";
import D4 from "../_overrides/radio-button__size-radio-buttons";
import D5 from "../_overrides/radio-button__color-radio-buttons";
import D6 from "./06-form-control-label-placement";
import D7 from "./07-error-radios";
import D8 from "./08-customized-radios";
import D9 from "./09-use-radio-group";

export const DEMOS: DemoSet = {
  "RadioButtonsGroup": D0,
  "RowRadioButtonsGroup": D1,
  "ControlledRadioButtonsGroup": D2,
  "RadioButtons": D3,
  "SizeRadioButtons": D4,
  "ColorRadioButtons": D5,
  "FormControlLabelPlacement": D6,
  "ErrorRadios": D7,
  "CustomizedRadios": D8,
  "UseRadioGroup": D9,
};

export const SKIPPED: Record<string, string> = {
};
