/* 자동 생성 — tools/gen_bootstrap_demos.py. 손으로 고치지 말 것. */
import m000 from "./Container";
import m001 from "./ContainerFluid";
import m002 from "./ContainerFluidBreakpoint";
import m003 from "./AutoLayout";
import m004 from "./AutoLayoutSizing";
import m005 from "./AutoLayoutVariable";
import m006 from "./ResponsiveAuto";
import m007 from "./Responsive";
import m008 from "./Ordering";
import m009 from "./OrderingFirstLast";
import m010 from "./Offsetting";
import m011 from "./RowColLayout";
import m012 from "./RowColLayoutColWidthBreakpoint";

/** key → 공식 예제 파일의 default export(컴포넌트) 그대로. */
export const DEMOS: Record<string, unknown> = {
  "Container": m000,
  "ContainerFluid": m001,
  "ContainerFluidBreakpoint": m002,
  "AutoLayout": m003,
  "AutoLayoutSizing": m004,
  "AutoLayoutVariable": m005,
  "ResponsiveAuto": m006,
  "Responsive": m007,
  "Ordering": m008,
  "OrderingFirstLast": m009,
  "Offsetting": m010,
  "RowColLayout": m011,
  "RowColLayoutColWidthBreakpoint": m012,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
