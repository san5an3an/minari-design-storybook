import * as m000 from "./buttonGroup.root";
import * as m001 from "./buttonGroup.outline";
import * as m002 from "./buttonGroup.colorOptions";

export const DEMOS: Record<string, { component: unknown }> = {
  "buttonGroup.root": m000.root,
  "buttonGroup.outline": m001.outline,
  "buttonGroup.colorOptions": m002.colorOptions,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "buttonGroup.withIcons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "buttonGroup.outlineWithIcons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
