import * as m000 from "./configurator";
import * as m001 from "./withContent";
import * as m002 from "./siblings";
import * as m003 from "./boundaries";
import * as m004 from "./withPages";
import * as m005 from "./composition";
import * as m006 from "./links";
import * as m007 from "./autoContrast";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "withContent": m001.withContent,
  "siblings": m002.siblings,
  "boundaries": m003.boundaries,
  "withPages": m004.withPages,
  "composition": m005.composition,
  "links": m006.links,
  "autoContrast": m007.autoContrast,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "stylesApi": {"code": "package-missing", "detail": "미설치: @docs/styles-api"},
  "icons": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
