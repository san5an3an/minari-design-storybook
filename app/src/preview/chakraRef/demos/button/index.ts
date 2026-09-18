/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./button-basic";
import * as m001 from "./button-with-sizes";
import * as m002 from "./button-with-variants";
import * as m003 from "./button-with-icons";
import * as m004 from "./button-with-colors";
import * as m005 from "./button-with-disabled";
import * as m006 from "./button-with-disabled-link";
import * as m007 from "./button-with-loading";
import * as m008 from "./button-with-loading-toggle";
import * as m009 from "./button-with-spinner-placement";
import * as m011 from "./button-with-group";
import * as m012 from "./button-with-group-flushed";
import * as m013 from "./button-with-split-menu";
import * as m014 from "./button-with-responsive-size";
import * as m015 from "./button-with-radius";
import * as m016 from "./button-as-link";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "button-basic": m000.ButtonBasic,
  "button-with-sizes": m001.ButtonWithSizes,
  "button-with-variants": m002.ButtonWithVariants,
  "button-with-icons": m003.ButtonWithIcons,
  "button-with-colors": m004.ButtonWithColors,
  "button-with-disabled": m005.ButtonWithDisabled,
  "button-with-disabled-link": m006.ButtonWithDisabledLink,
  "button-with-loading": m007.ButtonWithLoading,
  "button-with-loading-toggle": m008.ButtonWithLoadingToggle,
  "button-with-spinner-placement": m009.ButtonWithSpinnerPlacement,
  "button-with-group": m011.ButtonWithGroup,
  "button-with-group-flushed": m012.ButtonWithGroupFlushed,
  "button-with-split-menu": m013.ButtonWithSplitMenu,
  "button-with-responsive-size": m014.ButtonWithResponsiveSize,
  "button-with-radius": m015.ButtonWithRadius,
  "button-as-link": m016.ButtonAsLink,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "button-with-custom-spinner": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-spinners"},
};
