import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-position";
import D2 from "./02-scroll-automatically";
import D3 from "./03-fade-in";
import D4 from "./04-arrows-for-switching";
import D5 from "./05-progress-of-dots";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Position": D1,
  "Scroll automatically": D2,
  "Fade in": D3,
  "Arrows for switching": D4,
  "Progress of dots": D5,
};

export const SKIPPED: Record<string, string> = {
};
