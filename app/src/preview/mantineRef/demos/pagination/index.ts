import * as m000 from "../_src/demos/core/Pagination/Pagination.demo.configurator";
import * as m001 from "../_src/demos/core/Pagination/Pagination.demo.withContent";
import * as m002 from "../_src/demos/core/Pagination/Pagination.demo.siblings";
import * as m003 from "../_src/demos/core/Pagination/Pagination.demo.boundaries";
import * as m004 from "../_src/demos/core/Pagination/Pagination.demo.withPages";
import * as m005 from "../_src/demos/core/Pagination/Pagination.demo.composition";
import * as m006 from "../_src/demos/core/Pagination/Pagination.demo.links";
import * as m007 from "../_src/demos/core/Pagination/Pagination.demo.icons";
import * as m008 from "../_src/demos/core/Pagination/Pagination.demo.autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "withContent": m001.withContent,
  "siblings": m002.siblings,
  "boundaries": m003.boundaries,
  "withPages": m004.withPages,
  "composition": m005.composition,
  "links": m006.links,
  "icons": m007.icons,
  "autoContrast": m008.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "local-module-missing", "detail": "형제 모듈을 못 세움 — 미설치: @mantine/charts"},
};
