/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-table";
import D1 from "./01-data-table";
import D2 from "./02-dense-table";
import D3 from "./03-enhanced-table";
import D4 from "./04-customized-tables";
import D5 from "./05-custom-pagination-actions-table";
import D6 from "./06-sticky-head-table";
import D7 from "./07-column-grouping-table";
import D8 from "./08-collapsible-table";
import D9 from "./09-spanning-table";
import D10 from "./11-accessible-table";

export const DEMOS: DemoSet = {
  "BasicTable": D0,
  "DataTable": D1,
  "DenseTable": D2,
  "EnhancedTable": D3,
  "CustomizedTables": D4,
  "CustomPaginationActionsTable": D5,
  "StickyHeadTable": D6,
  "ColumnGroupingTable": D7,
  "CollapsibleTable": D8,
  "SpanningTable": D9,
  "AccessibleTable": D10,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "ReactVirtualizedTable": "이 예제는 우리가 안 가진 패키지(react-virtuoso)를 불러요.",
};
