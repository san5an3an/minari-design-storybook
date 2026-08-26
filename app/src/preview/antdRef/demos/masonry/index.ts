import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-responsive";
import D2 from "./02-image";
import D3 from "./03-dynamic";
import D4 from "./04-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Responsive": D1,
  "Image": D2,
  "Dynamic": D3,
  "Custom semantic dom styling": D4,
};

export const SKIPPED: Record<string, string> = {
};
