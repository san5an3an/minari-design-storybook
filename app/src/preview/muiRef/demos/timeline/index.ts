import type { DemoSet } from "../types";
import D0 from "./00-basic-timeline";
import D1 from "./01-left-positioned-timeline";
import D2 from "./02-alternate-timeline";
import D3 from "./03-alternate-reverse-timeline";
import D4 from "./04-colors-timeline";
import D5 from "./05-outlined-timeline";
import D6 from "./06-opposite-content-timeline";
import D7 from "./07-customized-timeline";
import D8 from "./08-left-aligned-timeline";
import D9 from "./09-right-aligned-timeline";
import D10 from "./10-no-opposite-content";

export const DEMOS: DemoSet = {
  "BasicTimeline": D0,
  "LeftPositionedTimeline": D1,
  "AlternateTimeline": D2,
  "AlternateReverseTimeline": D3,
  "ColorsTimeline": D4,
  "OutlinedTimeline": D5,
  "OppositeContentTimeline": D6,
  "CustomizedTimeline": D7,
  "LeftAlignedTimeline": D8,
  "RightAlignedTimeline": D9,
  "NoOppositeContent": D10,
};

export const SKIPPED: Record<string, string> = {
};
