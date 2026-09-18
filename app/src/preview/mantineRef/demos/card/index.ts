import * as m000 from "./usage";
import * as m001 from "./link";
import * as m002 from "./linkSection";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "link": m001.link,
  "linkSection": m002.linkSection,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "section": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
