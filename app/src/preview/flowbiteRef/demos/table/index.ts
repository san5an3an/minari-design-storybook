import * as m000 from "./table.root";
import * as m001 from "./table.striped";
import * as m002 from "./table.hover";
import * as m003 from "./table.withCheckboxes";

export const DEMOS: Record<string, { component: unknown }> = {
  "table.root": m000.root,
  "table.striped": m001.striped,
  "table.hover": m002.hover,
  "table.withCheckboxes": m003.withCheckboxes,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
