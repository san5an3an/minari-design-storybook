import * as m000 from "../_src/demos/core/Pagination/Pagination.demo.configurator";
import * as m001 from "../_src/demos/core/Pagination/Pagination.demo.withContent";
import * as m002 from "../_src/demos/core/Pagination/Pagination.demo.siblings";
import * as m003 from "../_src/demos/core/Pagination/Pagination.demo.boundaries";
import * as m004 from "../_src/demos/core/Pagination/Pagination.demo.withPages";
import * as m005 from "../_src/demos/core/Pagination/Pagination.demo.stylesApi";
import * as m006 from "../_src/demos/core/Pagination/Pagination.demo.composition";
import * as m007 from "../_src/demos/core/Pagination/Pagination.demo.links";
import * as m008 from "../_src/demos/core/Pagination/Pagination.demo.icons";
import * as m009 from "../_src/demos/core/Pagination/Pagination.demo.autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "withContent": m001.withContent,
  "siblings": m002.siblings,
  "boundaries": m003.boundaries,
  "withPages": m004.withPages,
  "stylesApi": m005.stylesApi,
  "composition": m006.composition,
  "links": m007.links,
  "icons": m008.icons,
  "autoContrast": m009.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
