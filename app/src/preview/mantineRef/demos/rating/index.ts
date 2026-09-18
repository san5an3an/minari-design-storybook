import * as m000 from "./configurator";
import * as m001 from "./readOnly";
import * as m002 from "./fractions";

export const DEMOS: Record<string, { component: unknown }> = {
  "configurator": m000.configurator,
  "readOnly": m001.readOnly,
  "fractions": m002.fractions,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
  "symbol": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
  "customSymbol": {"code": "package-missing", "detail": "미설치: @tabler/icons-react"},
};
