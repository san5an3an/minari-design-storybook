import * as m000 from "./alert.root";
import * as m001 from "./alert.dismissible";
import * as m002 from "./alert.rounded";
import * as m003 from "./alert.borderAccent";

export const DEMOS: Record<string, { component: unknown }> = {
  "alert.root": m000.root,
  "alert.dismissible": m001.dismissible,
  "alert.rounded": m002.rounded,
  "alert.borderAccent": m003.borderAccent,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "alert.withIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "alert.additionalContent": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "alert.allOptions": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
