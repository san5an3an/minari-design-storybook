import type { DemoSet } from "../types";
import D0 from "./00-variants";
import D1 from "./01-animations";
import D2 from "./02-you-tube";
import D3 from "./03-facebook";
import D4 from "./04-skeleton-typography";
import D5 from "./05-skeleton-children";
import D6 from "./06-skeleton-color";

export const DEMOS: DemoSet = {
  "Variants": D0,
  "Animations": D1,
  "YouTube": D2,
  "Facebook": D3,
  "SkeletonTypography": D4,
  "SkeletonChildren": D5,
  "SkeletonColor": D6,
};

export const SKIPPED: Record<string, string> = {
};
