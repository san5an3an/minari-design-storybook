import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-align";
import D2 from "./02-more";
import D3 from "./03-changer";
import D4 from "./04-jumper";
import D5 from "./05-size";
import D6 from "./06-simple-mode";
import D7 from "./07-controlled";
import D8 from "./08-total-number";
import D9 from "./09-show-all";
import D10 from "./10-prev-and-next";
import D11 from "./11-custom-component";
import D12 from "./12-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Align": D1,
  "More": D2,
  "Changer": D3,
  "Jumper": D4,
  "Size": D5,
  "Simple mode": D6,
  "Controlled": D7,
  "Total number": D8,
  "Show All": D9,
  "Prev and next": D10,
  "Custom component": D11,
  "Custom semantic dom styling": D12,
};

export const SKIPPED: Record<string, string> = {
};
