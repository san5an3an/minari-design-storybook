/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-grid";
import D1 from "./01-full-width-grid";
import D2 from "./03-row-and-column-spacing";
import D3 from "./04-responsive-grid";
import D4 from "./06-auto-grid";
import D5 from "./07-variable-width-grid";
import D6 from "./08-nested-grid";
import D7 from "./09-nested-grid-columns";
import D8 from "./10-columns-grid";
import D9 from "./11-offset-grid";
import D10 from "./12-centered-element-grid";
import D11 from "./13-full-bordered-grid";
import D12 from "./14-half-bordered-grid";
import D13 from "./15-column-layout-inside-grid";

export const DEMOS: DemoSet = {
  "BasicGrid": D0,
  "FullWidthGrid": D1,
  "RowAndColumnSpacing": D2,
  "ResponsiveGrid": D3,
  "AutoGrid": D4,
  "VariableWidthGrid": D5,
  "NestedGrid": D6,
  "NestedGridColumns": D7,
  "ColumnsGrid": D8,
  "OffsetGrid": D9,
  "CenteredElementGrid": D10,
  "FullBorderedGrid": D11,
  "HalfBorderedGrid": D12,
  "ColumnLayoutInsideGrid": D13,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "SpacingGrid": "이 예제는 우리가 안 가진 패키지(@mui/internal-core-docs/HighlightedCode)를 불러요.",
  "InteractiveGrid": "이 예제는 우리가 안 가진 패키지(@mui/internal-core-docs/HighlightedCode)를 불러요.",
};
