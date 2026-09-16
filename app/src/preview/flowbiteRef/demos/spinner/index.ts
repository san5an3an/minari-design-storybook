import * as m000 from "./spinner.root";
import * as m001 from "./spinner.colors";
import * as m002 from "./spinner.sizing";
import * as m003 from "./spinner.alignment";
import * as m004 from "./spinner.loadingButtons";

export const DEMOS: Record<string, { component: unknown }> = {
  "spinner.root": m000.root,
  "spinner.colors": m001.colors,
  "spinner.sizing": m002.sizing,
  "spinner.alignment": m003.alignment,
  "spinner.loadingButtons": m004.loadingButtons,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
