import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-border";
import D2 from "./02-custom-size";
import D3 from "./03-responsive";
import D4 from "./04-vertical";
import D5 from "./05-vertical-border";
import D6 from "./06-custom-semantic-dom-styling";
import D7 from "./07-row";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "border": D1,
  "Custom size": D2,
  "responsive": D3,
  "Vertical": D4,
  "Vertical border": D5,
  "Custom semantic dom styling": D6,
  "row": D7,
};

export const SKIPPED: Record<string, string> = {
};
