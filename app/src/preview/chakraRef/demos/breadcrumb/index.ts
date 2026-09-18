/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./breadcrumb-basic";
import * as m001 from "./breadcrumb-with-sizes";
import * as m002 from "./breadcrumb-with-variants";
import * as m003 from "./breadcrumb-with-separator";
import * as m004 from "./breadcrumb-with-icon";
import * as m005 from "./breadcrumb-with-menu";
import * as m006 from "./breadcrumb-with-ellipsis";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "breadcrumb-basic": m000.BreadcrumbBasic,
  "breadcrumb-with-sizes": m001.BreadcrumbWithSizes,
  "breadcrumb-with-variants": m002.BreadcrumbWithVariants,
  "breadcrumb-with-separator": m003.BreadcrumbWithSeparator,
  "breadcrumb-with-icon": m004.BreadcrumbWithIcon,
  "breadcrumb-with-menu": m005.BreadcrumbWithMenu,
  "breadcrumb-with-ellipsis": m006.BreadcrumbWithEllipsis,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
