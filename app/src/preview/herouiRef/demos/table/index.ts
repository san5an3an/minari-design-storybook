import * as m000 from "./basic";
import * as m001 from "./secondary-variant";
import * as m002 from "./async-loading";
import * as m003 from "./sorting";
import * as m004 from "./selection";
import * as m005 from "./pagination";
import * as m006 from "./column-resizing";
import * as m007 from "./virtualization";
import * as m008 from "./tanstack-table";
import * as m009 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "secondary-variant": m001.SecondaryVariant,
  "async-loading": m002.AsyncLoading,
  "sorting": m003.Sorting,
  "selection": m004.SelectionDemo,
  "pagination": m005.PaginationDemo,
  "column-resizing": m006.ColumnResizing,
  "virtualization": m007.Virtualization,
  "tanstack-table": m008.TanstackTable,
  "custom-styles": m009.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "expandable-rows": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
  "empty-state": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
  "custom-cells": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
};
