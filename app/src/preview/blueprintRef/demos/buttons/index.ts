import * as m000 from "./ButtonBasicExample";
import * as m001 from "./ButtonIntentExample";
import * as m002 from "./ButtonVariantExample";
import * as m003 from "./ButtonMinimalExample";
import * as m004 from "./ButtonOutlinedExample";
import * as m005 from "./ButtonSizeExample";
import * as m006 from "./ButtonFillExample";
import * as m007 from "./ButtonAlignTextExample";
import * as m008 from "./ButtonEllipsizeTextExample";
import * as m009 from "./ButtonIconWithTextExample";
import * as m010 from "./ButtonIconExample";
import * as m011 from "./ButtonStatesExample";
import * as m012 from "./ButtonAnchorButtonExample";
import * as m013 from "./ButtonDisabledButtonTooltipExample";

export const DEMOS = {
  "ButtonBasicExample": m000.default,
  "ButtonIntentExample": m001.default,
  "ButtonVariantExample": m002.default,
  "ButtonMinimalExample": m003.default,
  "ButtonOutlinedExample": m004.default,
  "ButtonSizeExample": m005.default,
  "ButtonFillExample": m006.default,
  "ButtonAlignTextExample": m007.default,
  "ButtonEllipsizeTextExample": m008.default,
  "ButtonIconWithTextExample": m009.default,
  "ButtonIconExample": m010.default,
  "ButtonStatesExample": m011.default,
  "ButtonAnchorButtonExample": m012.default,
  "ButtonDisabledButtonTooltipExample": m013.default,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "ButtonPlaygroundExample": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/docs-theme"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
};
