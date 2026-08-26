import type { DemoSet } from "../types";
import D0 from "./00-simple-list";
import D1 from "./01-basic-list";
import D2 from "./02-load-more";
import D3 from "./03-vertical";
import D4 from "./04-pagination-settings";
import D5 from "./05-grid";
import D6 from "./06-responsive-grid-list";
import D7 from "./08-drag-sorting";
import D8 from "./09-drag-sorting-with-handler";
import D9 from "./10-grid-drag-sorting";
import D10 from "./11-grid-drag-sorting-with-handler";
import D11 from "./12-virtual-list";

export const DEMOS: DemoSet = {
  "Simple list": D0,
  "Basic list": D1,
  "Load more": D2,
  "Vertical": D3,
  "Pagination Settings": D4,
  "Grid": D5,
  "Responsive grid list": D6,
  "Drag sorting": D7,
  "Drag sorting with handler": D8,
  "Grid Drag sorting": D9,
  "Grid Drag sorting with handler": D10,
  "virtual list": D11,
};

export const SKIPPED: Record<string, string> = {
  "Scrolling loaded": "이 예제는 우리가 안 가진 패키지(react-infinite-scroll-component)를 불러요.",
};
