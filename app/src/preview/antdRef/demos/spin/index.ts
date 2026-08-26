import type { DemoSet } from "../types";
import D0 from "./00-basic-usage";
import D1 from "./01-size";
import D2 from "./02-embedded-mode";
import D3 from "./03-customized-description";
import D4 from "./04-delay";
import D5 from "./05-custom-spinning-indicator";
import D6 from "./06-progress";
import D7 from "./07-custom-semantic-dom-styling";
import D8 from "./08-fullscreen";

export const DEMOS: DemoSet = {
  "Basic Usage": D0,
  "Size": D1,
  "Embedded mode": D2,
  "Customized description": D3,
  "Delay": D4,
  "Custom spinning indicator": D5,
  "Progress": D6,
  "Custom semantic dom styling": D7,
  "Fullscreen": D8,
};

export const SKIPPED: Record<string, string> = {
};
