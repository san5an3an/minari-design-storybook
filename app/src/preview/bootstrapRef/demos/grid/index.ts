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

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
