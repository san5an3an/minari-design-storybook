import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-title-component";
import D2 from "./02-text-and-link-component";
import D3 from "./03-editable";
import D4 from "./04-copyable";
import D5 from "./05-ellipsis";
import D6 from "./06-controlled-ellipsis-expand-collapse";
import D7 from "./07-ellipsis-from-middle";
import D8 from "./08-suffix";
import D9 from "./09-table";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Title Component": D1,
  "Text and Link Component": D2,
  "Editable": D3,
  "Copyable": D4,
  "Ellipsis": D5,
  "Controlled ellipsis expand/collapse": D6,
  "Ellipsis from middle": D7,
  "suffix": D8,
  "Table": D9,
};

export const SKIPPED: Record<string, string> = {
};
