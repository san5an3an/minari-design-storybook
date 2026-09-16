// @ts-nocheck
import d0 from "./confirmpopup/basic";
import d1 from "./confirmpopup/declarative";
import d2 from "./confirmpopup/headless";
export const demos = {
  "basic": d0,
  "declarative": d1,
  "headless": d2,
};
export const skipped = {
  "template": {"code":"other","detail":"공식 코드 문자열이 선언하지 않은 이름을 부른다 — ConfirmPopup (import 줄 누락 · 본문 불변이라 고치지 않음)"},
};
