import * as m000 from "./navbar.root";
import * as m001 from "./navbar.withCTAButton";
import * as m002 from "./navbar.withDropdown";

export const DEMOS: Record<string, { component: unknown }> = {
  "navbar.root": m000.root,
  "navbar.withCTAButton": m001.withCTAButton,
  "navbar.withDropdown": m002.withDropdown,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
