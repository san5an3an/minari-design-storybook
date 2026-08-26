import type { DemoSet } from "../types";
import D0 from "./00-simple-charts";

export const DEMOS: DemoSet = {
  "SimpleCharts": D0,
};

export const SKIPPED: Record<string, string> = {
  "Combining": "이 예제는 공식 문서 사이트 안쪽의 파일(../dataset/GOOGL.json)을 불러요 — 라이브러리가 아니라 그 사이트의 일부라 우리 쪽에 옮길 실체가 없어요.",
};
