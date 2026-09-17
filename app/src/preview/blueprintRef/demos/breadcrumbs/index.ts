import * as m000 from "./BreadcrumbsBasicExample";
import * as m001 from "./BreadcrumbsIconExample";
import * as m002 from "./BreadcrumbsOverflowExample";
import * as m003 from "./BreadcrumbsRendererExample";
import * as m004 from "./BreadcrumbsCollapseFromExample";
import * as m005 from "./BreadcrumbsDisabledExample";
import * as m006 from "./BreadcrumbsPlaygroundExample";

export const DEMOS = {
  "BreadcrumbsBasicExample": m000.default,
  "BreadcrumbsIconExample": m001.default,
  "BreadcrumbsOverflowExample": m002.default,
  "BreadcrumbsRendererExample": m003.default,
  "BreadcrumbsCollapseFromExample": m004.default,
  "BreadcrumbsDisabledExample": m005.default,
  "BreadcrumbsPlaygroundExample": m006.BreadcrumbsPlaygroundExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
