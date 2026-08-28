import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-complex-combination";
import D2 from "./02-active-animation";
import D3 from "./03-button-avatar-input-image-node";
import D4 from "./04-contains-sub-component";
import D5 from "./05-list";
import D6 from "./06-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Complex combination": D1,
  "Active Animation": D2,
  "Button/Avatar/Input/Image/Node": D3,
  "Contains sub component": D4,
  "List": D5,
  "Custom semantic dom styling": D6,
};

export const SKIPPED: Record<string, string> = {
};
