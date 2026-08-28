import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-complex-combination";
import D2 from "./02-active-animation";
import D3 from "./03-button-avatar-input-image-node";
import D4 from "./04-contains-sub-component";
import D5 from "./06-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Complex combination": D1,
  "Active Animation": D2,
  "Button/Avatar/Input/Image/Node": D3,
  "Contains sub component": D4,
  "Custom semantic dom styling": D5,
};

export const SKIPPED: Record<string, string> = {
  "List": "이 예제는 antd 의 `Icon` 공장을 타입으로 부르는데, 우리 아이콘 층(Lucide)에는 그 공장이 없어요 — 같은 회사 규칙입니다.",
};
