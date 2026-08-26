import type { DemoSet } from "../types";
import D0 from "./00-basic-button-group";
import D1 from "./01-variant-button-group";
import D2 from "./02-group-sizes-colors";
import D3 from "./03-group-orientation";
import D4 from "./04-split-button";
import D5 from "./05-disable-elevation";
import D6 from "./06-loading-button-group";

export const DEMOS: DemoSet = {
  "BasicButtonGroup": D0,
  "VariantButtonGroup": D1,
  "GroupSizesColors": D2,
  "GroupOrientation": D3,
  "SplitButton": D4,
  "DisableElevation": D5,
  "LoadingButtonGroup": D6,
};

export const SKIPPED: Record<string, string> = {
};
