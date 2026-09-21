/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./dialog-basic";
import * as m001 from "./dialog-with-sizes";
import * as m002 from "./dialog-with-cover";
import * as m003 from "./dialog-with-fullscreen";
import * as m004 from "./dialog-with-responsive-size";
import * as m005 from "./dialog-with-placement";
import * as m007 from "./dialog-with-store";
import * as m008 from "./dialog-with-context";
import * as m010 from "./dialog-open-from-popover";
import * as m011 from "./dialog-open-from-menu";
import * as m012 from "./dialog-with-initial-focus";
import * as m015 from "./dialog-with-motion-preset";
import * as m016 from "./dialog-with-role";
import * as m017 from "./dialog-with-close-outside";
import * as m018 from "./dialog-non-modal";
import * as m019 from "./dialog-with-datalist";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "dialog-basic": m000.DialogBasic,
  "dialog-with-sizes": m001.DialogWithSizes,
  "dialog-with-cover": m002.DialogWithCover,
  "dialog-with-fullscreen": m003.DialogWithFullscreen,
  "dialog-with-responsive-size": m004.DialogWithResponsiveSize,
  "dialog-with-placement": m005.DialogWithPlacement,
  "dialog-with-store": m007.DialogWithStore,
  "dialog-with-context": m008.DialogWithContext,
  "dialog-open-from-popover": m010.DialogOpenFromPopover,
  "dialog-open-from-menu": m011.DialogOpenFromMenu,
  "dialog-with-initial-focus": m012.DialogWithInitialFocus,
  "dialog-with-motion-preset": m015.DialogWithMotionPreset,
  "dialog-with-role": m016.DialogWithRole,
  "dialog-with-close-outside": m017.DialogWithCloseOutside,
  "dialog-non-modal": m018.DialogNonModal,
  "dialog-with-datalist": m019.DialogWithDatalist,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "dialog-controlled": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "dialog-nested": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "dialog-with-inside-scroll": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
  "dialog-with-outside-scroll": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
};
