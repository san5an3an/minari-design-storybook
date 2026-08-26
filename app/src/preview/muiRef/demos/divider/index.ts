import type { DemoSet } from "../types";
import D0 from "./00-intro-divider";
import D1 from "./01-divider-variants";
import D2 from "./02-vertical-dividers";
import D3 from "./03-flex-divider";
import D4 from "./04-divider-text";
import D5 from "./05-list-dividers";
import D6 from "./06-vertical-divider-middle";

export const DEMOS: DemoSet = {
  "IntroDivider": D0,
  "DividerVariants": D1,
  "VerticalDividers": D2,
  "FlexDivider": D3,
  "DividerText": D4,
  "ListDividers": D5,
  "VerticalDividerMiddle": D6,
};

export const SKIPPED: Record<string, string> = {
};
