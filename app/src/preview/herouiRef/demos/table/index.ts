import * as m000 from "./basic";
import * as m001 from "./secondary-variant";
import * as m002 from "./async-loading";
import * as m003 from "./sorting";
import * as m004 from "./selection";
import * as m005 from "./expandable-rows";
import * as m006 from "./pagination";
import * as m007 from "./column-resizing";
import * as m008 from "./empty-state";
import * as m009 from "./virtualization";
import * as m010 from "./tanstack-table";
import * as m011 from "./custom-cells";
import * as m012 from "./custom-styles";

export const DEMOS = {
  "basic": m000.Basic,
  "secondary-variant": m001.SecondaryVariant,
  "async-loading": m002.AsyncLoading,
  "sorting": m003.Sorting,
  "selection": m004.SelectionDemo,
  "expandable-rows": m005.ExpandableRows,
  "pagination": m006.PaginationDemo,
  "column-resizing": m007.ColumnResizing,
  "empty-state": m008.EmptyStateDemo,
  "virtualization": m009.Virtualization,
  "tanstack-table": m010.TanstackTable,
  "custom-cells": m011.CustomCells,
  "custom-styles": m012.CustomStyles,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
