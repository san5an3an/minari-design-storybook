import * as m000 from "./input-basic";
import * as m001 from "./input-with-variants";
import * as m002 from "./input-with-sizes";
import * as m003 from "./input-with-helper-text";
import * as m004 from "./input-with-error-text";
import * as m005 from "./input-with-field";
import * as m007 from "./input-with-start-icon";
import * as m008 from "./input-with-start-text";
import * as m009 from "./input-with-start-and-end-text";
import * as m010 from "./input-with-kbd";
import * as m011 from "./input-with-select";
import * as m012 from "./input-with-start-addon";
import * as m013 from "./input-with-end-addon";
import * as m014 from "./input-with-start-and-end-addon";
import * as m015 from "./input-with-disabled";
import * as m016 from "./input-with-end-button";
import * as m017 from "./input-with-focus-error-color";
import * as m018 from "./input-with-placeholder-style";
import * as m019 from "./input-with-floating-label";
import * as m021 from "./input-with-character-counter";
import * as m024 from "./input-with-clear-button";

export const DEMOS = {
  "input-basic": m000.InputBasic,
  "input-with-variants": m001.InputWithVariants,
  "input-with-sizes": m002.InputWithSizes,
  "input-with-helper-text": m003.InputWithHelperText,
  "input-with-error-text": m004.InputWithErrorText,
  "input-with-field": m005.InputWithField,
  "input-with-start-icon": m007.InputWithStartIcon,
  "input-with-start-text": m008.InputWithStartText,
  "input-with-start-and-end-text": m009.InputWithStartAndEndText,
  "input-with-kbd": m010.InputWithKbd,
  "input-with-select": m011.InputWithSelect,
  "input-with-start-addon": m012.InputWithStartAddon,
  "input-with-end-addon": m013.InputWithEndAddon,
  "input-with-start-and-end-addon": m014.InputWithStartAndEndAddon,
  "input-with-disabled": m015.InputWithDisabled,
  "input-with-end-button": m016.InputWithEndButton,
  "input-with-focus-error-color": m017.InputWithFocusErrorColor,
  "input-with-placeholder-style": m018.InputWithPlaceholderStyle,
  "input-with-floating-label": m019.InputWithFloatingLabel,
  "input-with-character-counter": m021.InputWithCharacterCounter,
  "input-with-clear-button": m024.InputWithClearButton,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "input-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-hook-form"},
  "input-with-mask": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: use-mask-input"},
  "input-with-card-number": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-payment-inputs"},
  "input-with-card-details": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-payment-inputs"},
};
