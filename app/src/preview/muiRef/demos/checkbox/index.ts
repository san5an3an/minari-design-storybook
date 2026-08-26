import type { DemoSet } from "../types";
import D0 from "./00-checkboxes";
import D1 from "./01-checkbox-labels";
import D2 from "./02-size-checkboxes";
import D3 from "./03-color-checkboxes";
import D4 from "./04-icon-checkboxes";
import D5 from "./05-controlled-checkbox";
import D6 from "./06-indeterminate-checkbox";
import D7 from "./07-checkboxes-group";
import D8 from "./08-form-control-label-position";
import D9 from "./09-customized-checkbox";

export const DEMOS: DemoSet = {
  "Checkboxes": D0,
  "CheckboxLabels": D1,
  "SizeCheckboxes": D2,
  "ColorCheckboxes": D3,
  "IconCheckboxes": D4,
  "ControlledCheckbox": D5,
  "IndeterminateCheckbox": D6,
  "CheckboxesGroup": D7,
  "FormControlLabelPosition": D8,
  "CustomizedCheckbox": D9,
};

export const SKIPPED: Record<string, string> = {
};
