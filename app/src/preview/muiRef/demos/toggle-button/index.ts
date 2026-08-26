import type { DemoSet } from "../types";
import D0 from "./00-toggle-buttons";
import D1 from "./01-toggle-buttons-multiple";
import D2 from "./02-toggle-button-sizes";
import D3 from "./03-color-toggle-button";
import D4 from "./04-vertical-toggle-buttons";
import D5 from "./05-toggle-button-not-empty";
import D6 from "./06-standalone-toggle-button";
import D7 from "./07-customized-dividers";
import D8 from "./08-horizontal-spacing-toggle-button";
import D9 from "./09-vertical-spacing-toggle-button";

export const DEMOS: DemoSet = {
  "ToggleButtons": D0,
  "ToggleButtonsMultiple": D1,
  "ToggleButtonSizes": D2,
  "ColorToggleButton": D3,
  "VerticalToggleButtons": D4,
  "ToggleButtonNotEmpty": D5,
  "StandaloneToggleButton": D6,
  "CustomizedDividers": D7,
  "HorizontalSpacingToggleButton": D8,
  "VerticalSpacingToggleButton": D9,
};

export const SKIPPED: Record<string, string> = {
};
