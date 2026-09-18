import * as m000 from "./configurator";
import * as m001 from "./nested";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "nested": m001.nested,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "icon": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
