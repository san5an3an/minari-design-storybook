import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-align";
import D2 from "./02-gap";
import D3 from "./03-wrap";
import D4 from "./04-combination";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "align": D1,
  "gap": D2,
  "Wrap": D3,
  "combination": D4,
};

export const SKIPPED: Record<string, string> = {
};
