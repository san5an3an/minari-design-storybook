/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-horizontal-linear-stepper";
import D1 from "./01-horizontal-non-linear-stepper";
import D2 from "./02-horizontal-linear-alternative-label-stepper";
import D3 from "./03-horizontal-stepper-with-error";
import D4 from "./04-customized-steppers";
import D5 from "./05-vertical-linear-stepper";
import D6 from "./06-vertical-linear-alternative-label-stepper";
import D7 from "./07-text-mobile-stepper";
import D8 from "./08-dots-mobile-stepper";
import D9 from "./09-progress-mobile-stepper";

export const DEMOS: DemoSet = {
  "HorizontalLinearStepper": D0,
  "HorizontalNonLinearStepper": D1,
  "HorizontalLinearAlternativeLabelStepper": D2,
  "HorizontalStepperWithError": D3,
  "CustomizedSteppers": D4,
  "VerticalLinearStepper": D5,
  "VerticalLinearAlternativeLabelStepper": D6,
  "TextMobileStepper": D7,
  "DotsMobileStepper": D8,
  "ProgressMobileStepper": D9,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
};
