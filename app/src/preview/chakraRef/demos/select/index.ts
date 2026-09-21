/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./select-basic";
import * as m001 from "./select-with-sizes";
import * as m002 from "./select-with-variants";
import * as m003 from "./select-with-color-palette";
import * as m004 from "./select-with-option-group";
import * as m005 from "./select-controlled";
import * as m008 from "./select-with-disabled";
import * as m009 from "./select-with-invalid";
import * as m010 from "./select-with-multiple";
import * as m011 from "./select-with-positioning";
import * as m012 from "./select-with-clear";
import * as m013 from "./select-with-overflow";
import * as m014 from "./select-with-item-description";
import * as m015 from "./select-open-from-popover";
import * as m016 from "./select-open-from-dialog";
import * as m017 from "./select-with-avatar";
import * as m018 from "./select-with-country";
import * as m019 from "./select-with-icon-button";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "select-basic": m000.SelectBasic,
  "select-with-sizes": m001.SelectWithSizes,
  "select-with-variants": m002.SelectWithVariants,
  "select-with-color-palette": m003.SelectWithColorPalette,
  "select-with-option-group": m004.SelectWithOptionGroup,
  "select-controlled": m005.SelectControlled,
  "select-with-disabled": m008.SelectWithDisabled,
  "select-with-invalid": m009.SelectWithInvalid,
  "select-with-multiple": m010.SelectWithMultiple,
  "select-with-positioning": m011.SelectWithPositioning,
  "select-with-clear": m012.SelectWithClear,
  "select-with-overflow": m013.SelectWithOverflow,
  "select-with-item-description": m014.SelectWithItemDescription,
  "select-open-from-popover": m015.SelectOpenFromPopover,
  "select-open-from-dialog": m016.SelectOpenFromDialog,
  "select-with-avatar": m017.SelectWithAvatar,
  "select-with-country": m018.SelectWithCountry,
  "select-with-icon-button": m019.SelectWithIconButton,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "select-async-loading": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-use"},
  "select-with-hook-form": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: @hookform/resolvers, react-hook-form"},
};
