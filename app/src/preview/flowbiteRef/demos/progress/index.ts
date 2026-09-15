import * as m000 from "./progress.root";
import * as m001 from "./progress.withLabels";
import * as m002 from "./progress.positioning";
import * as m003 from "./progress.sizing";
import * as m004 from "./progress.colors";

export const DEMOS: Record<string, { component: unknown }> = {
  "progress.root": m000.root,
  "progress.withLabels": m001.withLabels,
  "progress.positioning": m002.positioning,
  "progress.sizing": m003.sizing,
  "progress.colors": m004.colors,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
