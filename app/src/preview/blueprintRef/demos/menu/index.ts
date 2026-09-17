import * as m000 from "./MenuExample";
import * as m001 from "./MenuBasicExample";
import * as m002 from "./DropdownMenuExample";
import * as m003 from "./MenuSubmenuExample";

export const DEMOS = {
  "MenuExample": m000.MenuExample,
  "MenuBasicExample": m001.default,
  "DropdownMenuExample": m002.DropdownMenuExample,
  "MenuSubmenuExample": m003.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "MenuItemExample": {"reason": "unresolved-local-module", "detail": "받지 않은 상대 모듈: "},
};
