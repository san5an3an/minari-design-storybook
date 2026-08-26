import type { DemoSet } from "../types";
import D0 from "./00-basic-switches";
import D1 from "./01-switch-labels";
import D2 from "./02-switches-size";
import D3 from "./03-color-switches";
import D4 from "./04-controlled-switches";
import D5 from "./05-switches-group";
import D6 from "./06-customized-switches";
import D7 from "./07-form-control-label-position";

export const DEMOS: DemoSet = {
  "BasicSwitches": D0,
  "SwitchLabels": D1,
  "SwitchesSize": D2,
  "ColorSwitches": D3,
  "ControlledSwitches": D4,
  "SwitchesGroup": D5,
  "CustomizedSwitches": D6,
  "FormControlLabelPosition": D7,
};

export const SKIPPED: Record<string, string> = {
};
