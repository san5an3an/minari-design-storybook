import type { DemoSet } from "../types";
import D0 from "./00-data-grid-demo";
import D1 from "./03-render-component";

export const DEMOS: DemoSet = {
  "DataGridDemo": D0,
  "RenderComponent": D1,
};

export const SKIPPED: Record<string, string> = {
  "DataGridProDemo": "이 예제는 우리가 안 가진 패키지(@mui/x-data-grid-pro)를 불러요.",
  "DataGridPremiumDemo": "이 예제는 우리가 안 가진 패키지(@mui/x-data-grid-premium)를 불러요.",
};
