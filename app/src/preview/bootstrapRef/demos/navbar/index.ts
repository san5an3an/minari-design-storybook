import m000 from "./Basic";
import m001 from "./Brand";
import m002 from "./Form";
import m003 from "./TextLink";
import m004 from "./ColorSchemes";
import m005 from "./ContainerOutside";
import m006 from "./ContainerInside";
import m007 from "./NavScroll";
import m008 from "./Collapsible";
import m009 from "./Offcanvas";

export const DEMOS: Record<string, unknown> = {
  "Basic": m000,
  "Brand": m001,
  "Form": m002,
  "TextLink": m003,
  "ColorSchemes": m004,
  "ContainerOutside": m005,
  "ContainerInside": m006,
  "NavScroll": m007,
  "Collapsible": m008,
  "Offcanvas": m009,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
