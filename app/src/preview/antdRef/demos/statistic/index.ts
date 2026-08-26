import type { DemoSet } from "../types";
import D0 from "./00-basic";
import D1 from "./01-unit";
import D2 from "./03-in-card";
import D3 from "./04-timer";
import D4 from "./05-custom-semantic-dom-styling";

export const DEMOS: DemoSet = {
  "Basic": D0,
  "Unit": D1,
  "In Card": D2,
  "Timer": D3,
  "Custom semantic dom styling": D4,
};

export const SKIPPED: Record<string, string> = {
  "Animated number": "이 예제는 우리가 안 가진 패키지(react-countup)를 불러요.",
};
