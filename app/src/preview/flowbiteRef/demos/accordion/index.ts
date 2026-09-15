import * as m000 from "./accordion.root";
import * as m001 from "./accordion.collapseAll";

export const DEMOS: Record<string, { component: unknown }> = {
  "accordion.root": m000.root,
  "accordion.collapseAll": m001.collapseAll,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
