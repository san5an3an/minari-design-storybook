import * as m000 from "./default";
import * as m001 from "./with-disabled-items";
import * as m002 from "./with-sections";
import * as m003 from "./multi-select";
import * as m004 from "./controlled";
import * as m005 from "./virtualization";
import * as m006 from "./custom-check-icon";
import * as m007 from "./render-function";
import * as m008 from "./custom-styles";

export const DEMOS = {
  "default": m000.Default,
  "with-disabled-items": m001.WithDisabledItems,
  "with-sections": m002.WithSections,
  "multi-select": m003.MultiSelect,
  "controlled": m004.Controlled,
  "virtualization": m005.Virtualization,
  "custom-check-icon": m006.CustomCheckIcon,
  "render-function": m007.RenderFunction,
  "custom-styles": m008.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
