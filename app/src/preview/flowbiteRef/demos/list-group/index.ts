import * as m000 from "./listGroup.root";
import * as m001 from "./listGroup.itemsAsLink";
import * as m002 from "./listGroup.withButtons";
import * as m003 from "./listGroup.withIcons";

export const DEMOS: Record<string, { component: unknown }> = {
  "listGroup.root": m000.root,
  "listGroup.itemsAsLink": m001.itemsAsLink,
  "listGroup.withButtons": m002.withButtons,
  "listGroup.withIcons": m003.withIcons,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
