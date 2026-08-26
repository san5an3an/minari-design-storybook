/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-usage";
import D1 from "./01-jsx-style-api";
import D2 from "./02-selection";
import D3 from "./03-selection-and-operation";
import D4 from "./04-custom-selection";
import D5 from "./05-filter-and-sorter";
import D6 from "./06-filter-in-tree";
import D7 from "./07-filter-search";
import D8 from "./08-multiple-sorter";
import D9 from "./09-reset-filters-and-sorters";
import D10 from "./11-ajax";
import D11 from "./12-size";
import D12 from "./13-border-title-and-footer";
import D13 from "./14-expandable-row";
import D14 from "./15-order-specific-column";
import D15 from "./16-colspan-and-rowspan";
import D16 from "./17-tree-data";
import D17 from "./19-auto-height";
import D18 from "./23-hidden-columns";
import D19 from "./25-editable-cells";
import D20 from "./26-editable-rows";
import D21 from "./27-nested-tables";
import D22 from "./28-drag-sorting";
import D23 from "./29-drag-column-sorting";
import D24 from "./30-drag-sorting-with-handler";
import D25 from "./31-ellipsis-column";
import D26 from "./32-shared-column-props";
import D27 from "./33-ellipsis-column-custom-tooltip";
import D28 from "./34-custom-empty";
import D29 from "./36-virtual-list";
import D30 from "./37-responsive";
import D31 from "./38-pagination-settings";
import D32 from "./39-fixed-header-and-scroll-bar-with-the-page";
import D33 from "./40-dynamic-settings";
import D34 from "./41-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic Usage": D0,
  "JSX style API": D1,
  "selection": D2,
  "Selection and operation": D3,
  "Custom selection": D4,
  "Filter and sorter": D5,
  "Filter in Tree": D6,
  "Filter search": D7,
  "Multiple sorter": D8,
  "Reset filters and sorters": D9,
  "Ajax": D10,
  "size": D11,
  "border, title and footer": D12,
  "Expandable Row": D13,
  "Order Specific Column": D14,
  "colSpan and rowSpan": D15,
  "Tree data": D16,
  "Auto height": D17,
  "Hidden Columns": D18,
  "Editable Cells": D19,
  "Editable Rows": D20,
  "Nested tables": D21,
  "Drag sorting": D22,
  "Drag Column sorting": D23,
  "Drag sorting with handler": D24,
  "ellipsis column": D25,
  "Shared column props": D26,
  "ellipsis column custom tooltip": D27,
  "Custom empty": D28,
  "Virtual list": D29,
  "Responsive": D30,
  "Pagination Settings": D31,
  "Fixed header and scroll bar with the page": D32,
  "Dynamic Settings": D33,
  "Custom semantic dom styling": D34,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Customized filter panel": "이 예제는 우리가 안 가진 패키지(react-highlight-words)를 불러요.",
  "Fixed Header": "공식 예제가 `token.antCls` 를 읽는데, antd-style 이 그 이름을 타입으로 내보내지 않아요.",
  "Fixed Columns": "공식 예제가 `token.antCls` 를 읽는데, antd-style 이 그 이름을 타입으로 내보내지 않아요.",
  "Stack Fixed Columns": "공식 예제가 `token.antCls` 를 읽는데, antd-style 이 그 이름을 타입으로 내보내지 않아요.",
  "Fixed Columns and Header": "공식 예제가 `token.antCls` 를 읽는데, antd-style 이 그 이름을 타입으로 내보내지 않아요.",
  "Grouping table head": "공식 예제가 `token.antCls` 를 읽는데, antd-style 이 그 이름을 타입으로 내보내지 않아요.",
  "Summary": "공식 예제가 `token.antCls` 를 읽는데, antd-style 이 그 이름을 타입으로 내보내지 않아요.",
};
