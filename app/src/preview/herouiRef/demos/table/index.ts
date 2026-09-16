/* 자동 생성 — tools/gen_heroui_demos.py. 손으로 고치지 말 것. */
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

/** key(원천 파일 이름) → 공식 export 그대로. */
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

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "expandable-rows": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
  "empty-state": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
  "custom-cells": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @iconify/react"},
};
