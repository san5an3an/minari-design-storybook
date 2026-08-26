import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-vertical-direction";
import D2 from "./02-block-segmented";
import D3 from "./03-round-shape";
import D4 from "./04-disabled";
import D5 from "./05-controlled-mode";
import D6 from "./06-custom-render";
import D7 from "./07-dynamic";
import D8 from "./08-three-sizes-of-segmented";
import D9 from "./09-with-icon";
import D10 from "./10-with-icon-only";
import D11 from "./11-with-name";
import D12 from "./12-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Vertical Direction": D1,
  "Block Segmented": D2,
  "Round shape": D3,
  "Disabled": D4,
  "Controlled mode": D5,
  "Custom Render": D6,
  "Dynamic": D7,
  "Three sizes of Segmented": D8,
  "With Icon": D9,
  "With Icon only": D10,
  "With name": D11,
  "Custom semantic dom styling": D12,
};

export const SKIPPED: Record<string, string> = {
};
