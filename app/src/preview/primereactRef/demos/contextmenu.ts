// @ts-nocheck
import d0 from "./contextmenu/basic";
import d1 from "./contextmenu/document";
import d2 from "./contextmenu/template";
import d3 from "./contextmenu/command";
export const demos = {
  "basic": d0,
  "document": d1,
  "template": d2,
  "command": d3,
};
export const skipped = {
  "router": {"code":"runtime-unavailable","detail":"next/* 모듈이 필요해서 이 화면에서는 실행하지 않아요."},
  "datatable": {"code":"other","detail":"코드 문자열이 없다"},
};
