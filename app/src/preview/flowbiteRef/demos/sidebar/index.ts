import * as m000 from "./sidebar.root";
import * as m001 from "./sidebar.dropdown";
import * as m002 from "./sidebar.dropdownWithChevron";
import * as m003 from "./sidebar.separator";
import * as m004 from "./sidebar.withButton";
import * as m005 from "./sidebar.withLogo";

export const DEMOS: Record<string, { component: unknown }> = {
  "sidebar.root": m000.root,
  "sidebar.dropdown": m001.dropdown,
  "sidebar.dropdownWithChevron": m002.dropdownWithChevron,
  "sidebar.separator": m003.separator,
  "sidebar.withButton": m004.withButton,
  "sidebar.withLogo": m005.withLogo,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
