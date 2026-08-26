import type { DemoSet } from "../types";
import D0 from "./00-basic-speed-dial";
import D1 from "./01-playground-speed-dial";
import D2 from "./02-controlled-open-speed-dial";
import D3 from "./03-open-icon-speed-dial";
import D4 from "./04-speed-dial-tooltip-open";

export const DEMOS: DemoSet = {
  "BasicSpeedDial": D0,
  "PlaygroundSpeedDial": D1,
  "ControlledOpenSpeedDial": D2,
  "OpenIconSpeedDial": D3,
  "SpeedDialTooltipOpen": D4,
};

export const SKIPPED: Record<string, string> = {
};
