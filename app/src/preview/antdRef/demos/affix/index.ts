import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-callback";
import D2 from "./02-container-to-scroll";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Callback": D1,
  "Container to scroll.": D2,
};

export const SKIPPED: Record<string, string> = {
};
