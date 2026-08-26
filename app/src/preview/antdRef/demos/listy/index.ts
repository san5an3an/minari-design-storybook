/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-virtual-scrolling";
import D2 from "./03-rich-content";
import D3 from "./04-drag-sorting";
import D4 from "./05-infinite-loading";
import D5 from "./06-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Virtual scrolling": D1,
  "Rich content": D2,
  "Drag sorting": D3,
  "Infinite loading": D4,
  "Custom semantic dom styling": D5,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Grouping and sticky headers": "공식 예제 코드가 우리 타입 검사(엄격 모드)를 통과하지 못해요 — `Key` 를 그대로 화면에 넣어요.",
};
