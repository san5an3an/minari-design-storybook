/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-stack";
import D1 from "./01-direction-stack";
import D2 from "./02-divider-stack";
import D3 from "./03-responsive-stack";
import D4 from "./04-flexbox-gap-stack";
import D5 from "./06-zero-width-stack";

export const DEMOS: DemoSet = {
  "BasicStack": D0,
  "DirectionStack": D1,
  "DividerStack": D2,
  "ResponsiveStack": D3,
  "FlexboxGapStack": D4,
  "ZeroWidthStack": D5,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "InteractiveStack": "이 예제는 우리가 안 가진 패키지(@mui/internal-core-docs/HighlightedCode)를 불러요.",
};
