/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-menu";
import D1 from "./01-icon-menu";
import D2 from "./02-dense-menu";
import D3 from "./03-simple-list-menu";
import D4 from "./04-checkbox-menu";
import D5 from "./05-radio-menu";
import D6 from "./06-positioned-menu";
import D7 from "./07-menu-list-composition";
import D8 from "./08-account-menu";
import D9 from "./09-customized-menus";
import D10 from "./10-long-menu";
import D11 from "./11-typography-menu";
import D12 from "./12-fade-menu";
import D13 from "./13-context-menu";
import D14 from "./14-grouped-menu";

export const DEMOS: DemoSet = {
  "BasicMenu": D0,
  "IconMenu": D1,
  "DenseMenu": D2,
  "SimpleListMenu": D3,
  "CheckboxMenu": D4,
  "RadioMenu": D5,
  "PositionedMenu": D6,
  "MenuListComposition": D7,
  "AccountMenu": D8,
  "CustomizedMenus": D9,
  "LongMenu": D10,
  "TypographyMenu": D11,
  "FadeMenu": D12,
  "ContextMenu": D13,
  "GroupedMenu": D14,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "MenuPopupState": "이 예제는 우리가 안 가진 패키지(material-ui-popup-state)를 불러요.",
};
