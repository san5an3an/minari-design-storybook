import type { DemoSet } from "../types";
import D0 from "./00-basic-usage";
import D1 from "./01-customized";
import D2 from "./02-customize-input-component";
import D3 from "./03-non-case-sensitive-autocomplete";
import D4 from "./04-lookup-patterns-certain-category";
import D5 from "./05-lookup-patterns-uncertain-category";
import D6 from "./06-status";
import D7 from "./07-variants";
import D8 from "./08-customize-clear-button";
import D9 from "./09-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic Usage": D0,
  "Customized": D1,
  "Customize Input Component": D2,
  "Non-case-sensitive AutoComplete": D3,
  "Lookup-Patterns - Certain Category": D4,
  "Lookup-Patterns - Uncertain Category": D5,
  "Status": D6,
  "Variants": D7,
  "Customize clear button": D8,
  "Custom semantic dom styling": D9,
};

export const SKIPPED: Record<string, string> = {
};
