import type { DemoSet } from "../types";
import D0 from "./00-simple-snackbar";
import D1 from "./01-positioned-snackbar";
import D2 from "./02-long-text-snackbar";
import D3 from "./03-autohide-snackbar";
import D4 from "./04-transitions-snackbar";
import D5 from "./05-customized-snackbars";
import D6 from "./06-fab-integration-snackbar";
import D7 from "./07-consecutive-snackbars";

export const DEMOS: DemoSet = {
  "SimpleSnackbar": D0,
  "PositionedSnackbar": D1,
  "LongTextSnackbar": D2,
  "AutohideSnackbar": D3,
  "TransitionsSnackbar": D4,
  "CustomizedSnackbars": D5,
  "FabIntegrationSnackbar": D6,
  "ConsecutiveSnackbars": D7,
};

export const SKIPPED: Record<string, string> = {
  "IntegrationNotistack": "이 예제는 우리가 안 가진 패키지(notistack)를 불러요.",
};
