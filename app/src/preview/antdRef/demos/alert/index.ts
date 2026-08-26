/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-more-types";
import D2 from "./02-filled";
import D3 from "./03-closable";
import D4 from "./04-description";
import D5 from "./05-icon";
import D6 from "./06-banner";
import D7 from "./08-smoothly-unmount";
import D8 from "./09-errorboundary";
import D9 from "./10-custom-action";
import D10 from "./11-custom-title-alignment";
import D11 from "./12-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "More types": D1,
  "Filled": D2,
  "Closable": D3,
  "Description": D4,
  "Icon": D5,
  "Banner": D6,
  "Smoothly Unmount": D7,
  "ErrorBoundary": D8,
  "Custom action": D9,
  "Custom title alignment": D10,
  "Custom semantic dom styling": D11,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "Loop Banner": "이 예제는 우리가 안 가진 패키지(react-fast-marquee)를 불러요.",
};
