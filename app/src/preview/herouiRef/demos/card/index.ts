import * as m000 from "./variants";
import * as m001 from "./horizontal";
import * as m002 from "./with-avatar";
import * as m003 from "./with-form";

export const DEMOS = {
  "variants": m000.Variants,
  "horizontal": m001.Horizontal,
  "with-avatar": m002.WithAvatar,
  "with-form": m003.WithForm,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "default": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "with-images": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
  "custom-styles": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @gravity-ui/icons"},
};
