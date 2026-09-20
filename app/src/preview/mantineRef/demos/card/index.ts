import * as m000 from "../_src/demos/core/Card/Card.demo.usage";
import * as m001 from "../_src/demos/core/Card/Card.demo.link";
import * as m002 from "../_src/demos/core/Card/Card.demo.linkSection";
import * as m003 from "../_src/demos/core/Card/Card.demo.section";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "link": m001.link,
  "linkSection": m002.linkSection,
  "section": m003.section,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
