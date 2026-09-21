import * as m000 from "../_src/demos/core/Grid/Grid.demo.usage";
import * as m001 from "../_src/demos/core/Grid/Grid.demo.responsive";
import * as m002 from "../_src/demos/core/Grid/Grid.demo.gutter";
import * as m003 from "../_src/demos/core/Grid/Grid.demo.growConfigurator";
import * as m004 from "../_src/demos/core/Grid/Grid.demo.offset";
import * as m005 from "../_src/demos/core/Grid/Grid.demo.order";
import * as m006 from "../_src/demos/core/Grid/Grid.demo.rows";
import * as m007 from "../_src/demos/core/Grid/Grid.demo.flexConfigurator";
import * as m008 from "../_src/demos/core/Grid/Grid.demo.auto";
import * as m009 from "../_src/demos/core/Grid/Grid.demo.content";
import * as m010 from "../_src/demos/core/Grid/Grid.demo.columns";
import * as m011 from "../_src/demos/core/Grid/Grid.demo.container";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "responsive": m001.responsive,
  "gutter": m002.gutter,
  "growConfigurator": m003.growConfigurator,
  "offset": m004.offset,
  "order": m005.order,
  "rows": m006.rows,
  "flexConfigurator": m007.flexConfigurator,
  "auto": m008.auto,
  "content": m009.content,
  "columns": m010.columns,
  "container": m011.container,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
