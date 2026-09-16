// @ts-nocheck
import d0 from "./menu/basic";
import d1 from "./menu/popup";
export const demos = {
  "basic": d0,
  "popup": d1,
};
export const skipped = {
  "group": {"code":"runtime-unavailable","detail":"next/* 모듈이 필요해서 이 화면에서는 실행하지 않아요."},
  "template": {"code":"other","detail":"공식 코드 문자열이 선언하지 않은 이름을 부른다 — toast (import 줄 누락 · 본문 불변이라 고치지 않음)"},
  "command": {"code":"other","detail":"코드 문자열이 TSX 구문으로 서지 않는다(구문 진단 1 · 첫째: JSX expressions must have one parent element.)"},
  "router": {"code":"runtime-unavailable","detail":"next/* 모듈이 필요해서 이 화면에서는 실행하지 않아요."},
};
