import * as m000 from "./megaMenu.root";
import * as m001 from "./megaMenu.icons";

export const DEMOS: Record<string, { component: unknown }> = {
  "megaMenu.root": m000.root,
  "megaMenu.icons": m001.icons,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "megaMenu.fullWidth": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "megaMenu.fullWidthCTA": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "megaMenu.fullWidthImage": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
