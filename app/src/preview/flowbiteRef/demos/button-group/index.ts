import * as m000 from "./buttonGroup.root";
import * as m001 from "./buttonGroup.withIcons";
import * as m002 from "./buttonGroup.outline";
import * as m003 from "./buttonGroup.outlineWithIcons";
import * as m004 from "./buttonGroup.colorOptions";

export const DEMOS: Record<string, { component: unknown }> = {
  "buttonGroup.root": m000.root,
  "buttonGroup.withIcons": m001.withIcons,
  "buttonGroup.outline": m002.outline,
  "buttonGroup.outlineWithIcons": m003.outlineWithIcons,
  "buttonGroup.colorOptions": m004.colorOptions,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
