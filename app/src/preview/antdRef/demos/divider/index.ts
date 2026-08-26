import type { DemoSet } from "../types";
import D0 from "./00-horizontal";
import D1 from "./01-divider-with-title";
import D2 from "./02-set-the-spacing-size-of-the-divider";
import D3 from "./03-text-without-heading-style";
import D4 from "./04-vertical";
import D5 from "./05-variant";
import D6 from "./06-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Horizontal": D0,
  "Divider with title": D1,
  "Set the spacing size of the divider": D2,
  "Text without heading style": D3,
  "Vertical": D4,
  "Variant": D5,
  "Custom semantic dom styling": D6,
};

export const SKIPPED: Record<string, string> = {
};
