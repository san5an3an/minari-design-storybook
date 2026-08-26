import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-disabled";
import D2 from "./02-text-icon";
import D3 from "./03-two-sizes";
import D4 from "./04-loading";
import D5 from "./05-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Disabled": D1,
  "Text & icon": D2,
  "Two sizes": D3,
  "Loading": D4,
  "Custom semantic dom styling": D5,
};

export const SKIPPED: Record<string, string> = {
};
