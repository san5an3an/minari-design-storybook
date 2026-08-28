import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-virtual-scrolling";
import D2 from "./02-grouping-and-sticky-headers";
import D3 from "./03-rich-content";
import D4 from "./04-drag-sorting";
import D5 from "./05-infinite-loading";
import D6 from "./06-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Virtual scrolling": D1,
  "Grouping and sticky headers": D2,
  "Rich content": D3,
  "Drag sorting": D4,
  "Infinite loading": D5,
  "Custom semantic dom styling": D6,
};

export const SKIPPED: Record<string, string> = {
};
