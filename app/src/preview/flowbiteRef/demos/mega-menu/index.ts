import * as m000 from "./megaMenu.root";
import * as m001 from "./megaMenu.icons";
import * as m002 from "./megaMenu.fullWidth";
import * as m003 from "./megaMenu.fullWidthCTA";
import * as m004 from "./megaMenu.fullWidthImage";

export const DEMOS: Record<string, { component: unknown }> = {
  "megaMenu.root": m000.root,
  "megaMenu.icons": m001.icons,
  "megaMenu.fullWidth": m002.fullWidth,
  "megaMenu.fullWidthCTA": m003.fullWidthCTA,
  "megaMenu.fullWidthImage": m004.fullWidthImage,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
