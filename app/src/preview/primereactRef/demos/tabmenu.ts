// @ts-nocheck
import d0 from "./tabmenu/basic";
import d1 from "./tabmenu/controlled";
import d2 from "./tabmenu/template";
import d3 from "./tabmenu/command";
export const demos = {
  "basic": d0,
  "controlled": d1,
  "template": d2,
  "command": d3,
};
export const skipped = {
  "router": {"code":"runtime-unavailable","detail":"next/* 모듈이 필요해서 이 화면에서는 실행하지 않아요."},
};
