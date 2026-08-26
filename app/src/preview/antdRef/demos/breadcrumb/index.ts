import type { DemoSet } from "../types";
import D0 from "./00-basic-usage";
import D1 from "./01-with-an-icon";
import D2 from "./02-with-params";
import D3 from "./03-configuring-the-separator";
import D4 from "./04-bread-crumbs-with-drop-down-menu";
import D5 from "./05-configuring-the-separator-independently";
import D6 from "./06-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic Usage": D0,
  "With an Icon": D1,
  "With Params": D2,
  "Configuring the Separator": D3,
  "Bread crumbs with drop down menu": D4,
  "Configuring the Separator Independently": D5,
  "Custom semantic dom styling": D6,
};

export const SKIPPED: Record<string, string> = {
};
