import * as m000 from "./usage";
import * as m001 from "./variants";
import * as m002 from "./sizes";
import * as m003 from "./orientation";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "variants": m001.variants,
  "sizes": m002.sizes,
  "orientation": m003.orientation,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "labels": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
