import type { DemoSet } from "../types";
import D0 from "./00-simple-paper";
import D1 from "./01-elevation";
import D2 from "./02-variants";
import D3 from "./03-square-corners";

export const DEMOS: DemoSet = {
  "SimplePaper": D0,
  "Elevation": D1,
  "Variants": D2,
  "SquareCorners": D3,
};

export const SKIPPED: Record<string, string> = {
};
