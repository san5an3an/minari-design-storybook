/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./menu-basic";
import * as m001 from "./menu-controlled";
import * as m002 from "./menu-with-store";
import * as m003 from "./menu-with-command";
import * as m004 from "./menu-with-context-trigger";
import * as m005 from "./menu-with-group";
import * as m006 from "./menu-with-danger-item";
import * as m007 from "./menu-with-submenu";
import * as m008 from "./menu-with-links";
import * as m009 from "./menu-with-radio-items";
import * as m010 from "./menu-with-checkbox-items";
import * as m011 from "./menu-with-icon-and-command";
import * as m012 from "./menu-with-placement";
import * as m013 from "./menu-with-avatar";
import * as m014 from "./menu-with-anchor-rect";
import * as m015 from "./menu-with-mixed-layout";
import * as m016 from "./menu-with-overflow";
import * as m017 from "./menu-with-hide-when-detached";
import * as m019 from "./overlay-with-menu-item";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "menu-basic": m000.MenuBasic,
  "menu-controlled": m001.MenuControlled,
  "menu-with-store": m002.MenuWithStore,
  "menu-with-command": m003.MenuWithCommand,
  "menu-with-context-trigger": m004.MenuWithContextTrigger,
  "menu-with-group": m005.MenuWithGroup,
  "menu-with-danger-item": m006.MenuWithDangerItem,
  "menu-with-submenu": m007.MenuWithSubmenu,
  "menu-with-links": m008.MenuWithLinks,
  "menu-with-radio-items": m009.MenuWithRadioItems,
  "menu-with-checkbox-items": m010.MenuWithCheckboxItems,
  "menu-with-icon-and-command": m011.MenuWithIconAndCommand,
  "menu-with-placement": m012.MenuWithPlacement,
  "menu-with-avatar": m013.MenuWithAvatar,
  "menu-with-anchor-rect": m014.MenuWithAnchorRect,
  "menu-with-mixed-layout": m015.MenuWithMixedLayout,
  "menu-with-overflow": m016.MenuWithOverflow,
  "menu-with-hide-when-detached": m017.MenuWithHideWhenDetached,
  "overlay-with-menu-item": m019.OverlayWithMenuItem,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "menu-open-from-dialog": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치 패키지: react-lorem-ipsum"},
};
