import type { DemoSet } from "../types";
import D0 from "./00-accordion-usage";
import D1 from "./01-accordion-expand-icon";
import D2 from "./02-accordion-expand-default";
import D3 from "./03-accordion-transition";
import D4 from "./04-disabled-accordion";
import D5 from "./05-controlled-accordions";
import D6 from "./06-customized-accordions";

export const DEMOS: DemoSet = {
  "AccordionUsage": D0,
  "AccordionExpandIcon": D1,
  "AccordionExpandDefault": D2,
  "AccordionTransition": D3,
  "DisabledAccordion": D4,
  "ControlledAccordions": D5,
  "CustomizedAccordions": D6,
};

export const SKIPPED: Record<string, string> = {
};
