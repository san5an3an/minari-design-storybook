import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./variants";
import * as m003 from "./disabled";
import * as m004 from "./selection-modes";
import * as m005 from "./controlled";
import * as m006 from "./with-error-message";
import * as m007 from "./with-list-data";
import * as m008 from "./with-prefix";
import * as m009 from "./with-remove-button";
import * as m010 from "./render-function";
import * as m011 from "./custom-styles";

export const DEMOS = {
  "basic": m000.TagGroupBasic,
  "sizes": m001.TagGroupSizes,
  "variants": m002.TagGroupVariants,
  "disabled": m003.TagGroupDisabled,
  "selection-modes": m004.TagGroupSelectionModes,
  "controlled": m005.TagGroupControlled,
  "with-error-message": m006.TagGroupWithErrorMessage,
  "with-list-data": m007.TagGroupWithListData,
  "with-prefix": m008.TagGroupWithPrefix,
  "with-remove-button": m009.TagGroupWithRemoveButton,
  "render-function": m010.RenderFunction,
  "custom-styles": m011.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
