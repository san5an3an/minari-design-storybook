import * as m000 from "./with-loading-suffix";
import * as m001 from "./with-text-prefix";
import * as m002 from "./with-text-suffix";
import * as m003 from "./with-keyboard-shortcut";
import * as m004 from "./with-badge-suffix";
import * as m005 from "./with-prefix-and-suffix";

export const DEMOS = {
  "with-loading-suffix": m000.WithLoadingSuffix,
  "with-text-prefix": m001.WithTextPrefix,
  "with-text-suffix": m002.WithTextSuffix,
  "with-keyboard-shortcut": m003.WithKeyboardShortcut,
  "with-badge-suffix": m004.WithBadgeSuffix,
  "with-prefix-and-suffix": m005.WithPrefixAndSuffix,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "default": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "variants": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "on-surface": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "required": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "disabled": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "full-width": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-icon-prefix-and-text-suffix": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-copy-suffix": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-icon-prefix-and-copy-suffix": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "password-with-toggle": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "invalid": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-prefix-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-suffix-icon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-textarea": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-styles": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
