import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-choose-image";
import D2 from "./02-customize";
import D3 from "./03-configprovider";
import D4 from "./04-custom-semantic-dom-styling";
import D5 from "./05-no-description";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Choose image": D1,
  "Customize": D2,
  "ConfigProvider": D3,
  "Custom semantic dom styling": D4,
  "No description": D5,
};

export const SKIPPED: Record<string, string> = {
};
