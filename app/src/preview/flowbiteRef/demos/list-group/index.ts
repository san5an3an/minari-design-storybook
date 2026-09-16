import * as m000 from "./listGroup.root";
import * as m001 from "./listGroup.itemsAsLink";
import * as m002 from "./listGroup.withButtons";

export const DEMOS: Record<string, { component: unknown }> = {
  "listGroup.root": m000.root,
  "listGroup.itemsAsLink": m001.itemsAsLink,
  "listGroup.withButtons": m002.withButtons,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "listGroup.withIcons": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
