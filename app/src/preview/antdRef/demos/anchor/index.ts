/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-horizontal-anchor";
import D2 from "./02-static-anchor";
import D3 from "./03-customize-the-onclick-event";
import D4 from "./04-customize-the-anchor-highlight";
import D5 from "./05-set-anchor-scroll-offset";
import D6 from "./06-listening-for-anchor-link-change";
import D7 from "./07-replace-href-in-history";
import D8 from "./08-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Horizontal Anchor": D1,
  "Static Anchor": D2,
  "Customize the onClick event": D3,
  "Customize the anchor highlight": D4,
  "Set Anchor scroll offset": D5,
  "Listening for anchor link change": D6,
  "Replace href in history": D7,
  "Custom semantic dom styling": D8,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
