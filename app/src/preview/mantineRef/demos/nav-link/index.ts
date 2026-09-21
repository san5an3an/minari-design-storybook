import * as m000 from "../_src/demos/core/NavLink/NavLink.demo.usage";
import * as m001 from "../_src/demos/core/NavLink/NavLink.demo.active";
import * as m002 from "../_src/demos/core/NavLink/NavLink.demo.autoContrast";
import * as m003 from "../_src/demos/core/NavLink/NavLink.demo.nested";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "active": m001.active,
  "autoContrast": m002.autoContrast,
  "nested": m003.nested,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
