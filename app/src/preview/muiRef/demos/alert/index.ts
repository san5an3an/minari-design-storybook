import type { DemoSet } from "../types";
import D0 from "./00-simple-alert";
import D1 from "./01-basic-alerts";
import D2 from "./02-filled-alerts";
import D3 from "./03-outlined-alerts";
import D4 from "./04-color-alerts";
import D5 from "./05-action-alerts";
import D6 from "./06-icon-alerts";
import D7 from "./07-description-alerts";
import D8 from "./08-transition-alerts";

export const DEMOS: DemoSet = {
  "SimpleAlert": D0,
  "BasicAlerts": D1,
  "FilledAlerts": D2,
  "OutlinedAlerts": D3,
  "ColorAlerts": D4,
  "ActionAlerts": D5,
  "IconAlerts": D6,
  "DescriptionAlerts": D7,
  "TransitionAlerts": D8,
};

export const SKIPPED: Record<string, string> = {
};
