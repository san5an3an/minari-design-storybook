import * as m000 from "./MenuBasicExample";
import * as m001 from "./MenuSubmenuExample";

export const DEMOS = {
  "MenuBasicExample": m000.default,
  "MenuSubmenuExample": m001.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "MenuExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "MenuItemExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
  "DropdownMenuExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
