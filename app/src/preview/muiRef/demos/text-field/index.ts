/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-text-fields";
import D1 from "./01-form-props-text-fields";
import D2 from "./02-validation-text-fields";
import D3 from "./03-multiline-text-fields";
import D4 from "./04-select-text-fields";
import D5 from "./05-input-with-icon";
import D6 from "./06-input-adornments";
import D7 from "./07-input-suffix-shrink";
import D8 from "./08-text-field-sizes";
import D9 from "./09-text-field-hidden-label";
import D10 from "./10-layout-text-fields";
import D11 from "./11-full-width-text-field";
import D12 from "./12-state-text-fields";
import D13 from "./13-composed-text-field";
import D14 from "./14-inputs";
import D15 from "./15-color-text-fields";
import D16 from "./16-customized-inputs-styled";
import D17 from "./17-customized-inputs-style-overrides";
import D18 from "./18-customized-input-base";
import D19 from "./19-use-form-control";
import D20 from "./20-helper-text-misaligned";
import D21 from "./21-helper-text-aligned";

export const DEMOS: DemoSet = {
  "BasicTextFields": D0,
  "FormPropsTextFields": D1,
  "ValidationTextFields": D2,
  "MultilineTextFields": D3,
  "SelectTextFields": D4,
  "InputWithIcon": D5,
  "InputAdornments": D6,
  "InputSuffixShrink": D7,
  "TextFieldSizes": D8,
  "TextFieldHiddenLabel": D9,
  "LayoutTextFields": D10,
  "FullWidthTextField": D11,
  "StateTextFields": D12,
  "ComposedTextField": D13,
  "Inputs": D14,
  "ColorTextFields": D15,
  "CustomizedInputsStyled": D16,
  "CustomizedInputsStyleOverrides": D17,
  "CustomizedInputBase": D18,
  "UseFormControl": D19,
  "HelperTextMisaligned": D20,
  "HelperTextAligned": D21,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "FormattedInputs": "이 예제는 우리가 안 가진 패키지(react-imask)를 불러요.",
};
