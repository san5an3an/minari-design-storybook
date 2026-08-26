/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-tooltip";
import D1 from "./01-accessibility-tooltips";
import D2 from "./02-positioned-tooltips";
import D3 from "./03-customized-tooltips";
import D4 from "./04-arrow-tooltips";
import D5 from "./05-tooltip-offset";
import D6 from "./06-tooltip-margin";
import D7 from "./07-triggers-tooltips";
import D8 from "./08-controlled-tooltips";
import D9 from "./09-variable-width";
import D10 from "./10-non-interactive-tooltips";
import D11 from "./11-disabled-tooltips";
import D12 from "./12-transitions-tooltips";
import D13 from "./13-follow-cursor-tooltips";
import D14 from "./15-delay-tooltips";

export const DEMOS: DemoSet = {
  "BasicTooltip": D0,
  "AccessibilityTooltips": D1,
  "PositionedTooltips": D2,
  "CustomizedTooltips": D3,
  "ArrowTooltips": D4,
  "TooltipOffset": D5,
  "TooltipMargin": D6,
  "TriggersTooltips": D7,
  "ControlledTooltips": D8,
  "VariableWidth": D9,
  "NonInteractiveTooltips": D10,
  "DisabledTooltips": D11,
  "TransitionsTooltips": D12,
  "FollowCursorTooltips": D13,
  "DelayTooltips": D14,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "AnchorElTooltips": "이 예제는 우리가 안 가진 패키지(@popperjs/core)를 불러요.",
};
