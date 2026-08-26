import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-sizes";
import D2 from "./02-half-star";
import D3 from "./03-show-copywriting";
import D4 from "./04-read-only";
import D5 from "./05-clear-star";
import D6 from "./06-other-character";
import D7 from "./07-customize-character";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Sizes": D1,
  "Half star": D2,
  "Show copywriting": D3,
  "Read only": D4,
  "Clear star": D5,
  "Other Character": D6,
  "Customize character": D7,
};

export const SKIPPED: Record<string, string> = {
};
