import * as m000 from "./basic";
import * as m001 from "./sizes";
import * as m002 from "./disabled";
import * as m003 from "./simple-prev-next";
import * as m004 from "./controlled";
import * as m005 from "./with-ellipsis";
import * as m006 from "./with-summary";
import * as m007 from "./custom-icons";
import * as m008 from "./custom-styles";

export const DEMOS = {
  "basic": m000.PaginationBasic,
  "sizes": m001.PaginationSizes,
  "disabled": m002.PaginationDisabled,
  "simple-prev-next": m003.PaginationSimplePrevNext,
  "controlled": m004.PaginationControlled,
  "with-ellipsis": m005.PaginationWithEllipsis,
  "with-summary": m006.PaginationWithSummary,
  "custom-icons": m007.PaginationCustomIcons,
  "custom-styles": m008.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
