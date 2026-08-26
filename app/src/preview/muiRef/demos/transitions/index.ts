import type { DemoSet } from "../types";
import D0 from "./00-simple-collapse";
import D1 from "./01-simple-fade";
import D2 from "./02-simple-grow";
import D3 from "./03-simple-slide";
import D4 from "./04-slide-from-container";
import D5 from "./05-simple-zoom";

export const DEMOS: DemoSet = {
  "SimpleCollapse": D0,
  "SimpleFade": D1,
  "SimpleGrow": D2,
  "SimpleSlide": D3,
  "SlideFromContainer": D4,
  "SimpleZoom": D5,
};

export const SKIPPED: Record<string, string> = {
  "TransitionGroupExample": "이 예제는 우리가 안 가진 패키지(react-transition-group)를 불러요.",
};
