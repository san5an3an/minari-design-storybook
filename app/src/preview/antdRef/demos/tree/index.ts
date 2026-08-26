/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-controlled-tree";
import D2 from "./03-load-data-asynchronously";
import D3 from "./05-tree-with-line";
import D4 from "./06-customize-icon";
import D5 from "./07-directory";
import D6 from "./08-customize-collapse-expand-icon";
import D7 from "./09-virtual-scroll";
import D8 from "./10-scroll-to-nested-node";
import D9 from "./11-block-node";
import D10 from "./12-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Controlled Tree": D1,
  "load data asynchronously": D2,
  "Tree with line": D3,
  "Customize Icon": D4,
  "directory": D5,
  "Customize collapse/expand icon": D6,
  "Virtual scroll": D7,
  "Scroll to nested node": D8,
  "Block Node": D9,
  "Custom semantic dom styling": D10,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "draggable": "공식 예제 코드가 우리 타입 검사(엄격 모드)를 통과하지 못해요 — 심벌을 글자로 바꿔 써요.",
  "Searchable": "공식 예제 코드가 우리 타입 검사(엄격 모드)를 통과하지 못해요 — 심벌을 글자로 바꿔 써요.",
};
