import * as m000 from "./badge.root";
import * as m001 from "./badge.asLink";
import * as m002 from "./badge.sizes";

export const DEMOS: Record<string, { component: unknown }> = {
  "badge.root": m000.root,
  "badge.asLink": m001.asLink,
  "badge.sizes": m002.sizes,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "badge.withIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "badge.withIconOnly": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
