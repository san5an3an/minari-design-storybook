import type { DemoSet } from "../types";
import D0 from "./00-simple-bottom-navigation";
import D1 from "./01-label-bottom-navigation";
import D2 from "./02-fixed-bottom-navigation";

export const DEMOS: DemoSet = {
  "SimpleBottomNavigation": D0,
  "LabelBottomNavigation": D1,
  "FixedBottomNavigation": D2,
};

export const SKIPPED: Record<string, string> = {
};
