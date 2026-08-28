import type { DemoSet } from "../types";
import D0 from "./00-syntactic-sugar";
import D1 from "./01-color-variant";
import D2 from "./02-icon";
import D3 from "./03-icon-placement";
import D4 from "./04-size";
import D5 from "./05-disabled";
import D6 from "./06-loading";
import D7 from "./07-multiple-buttons";
import D8 from "./08-ghost-button";
import D9 from "./09-danger-buttons";
import D10 from "./10-block-button";
import D11 from "./11-gradient-button";
import D12 from "./12-custom-wave";
import D13 from "./13-custom-disabled-backgroundcolor";
import D14 from "./14-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Syntactic sugar": D0,
  "Color & Variant": D1,
  "Icon": D2,
  "Icon Placement": D3,
  "Size": D4,
  "Disabled": D5,
  "Loading": D6,
  "Multiple Buttons": D7,
  "Ghost Button": D8,
  "Danger Buttons": D9,
  "Block Button": D10,
  "Gradient Button": D11,
  "Custom Wave": D12,
  "Custom disabled backgroundColor": D13,
  "Custom semantic dom styling": D14,
};

export const SKIPPED: Record<string, string> = {
};
