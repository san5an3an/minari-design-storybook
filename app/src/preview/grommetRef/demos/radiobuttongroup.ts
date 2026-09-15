// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/RadioButtonGroup/stories/Children.stories.js";
import * as m1 from "./_src/src/js/components/RadioButtonGroup/stories/Disabled.stories.js";
import * as m2 from "./_src/src/js/components/RadioButtonGroup/stories/typescript/Simple.stories.tsx";
export const demos = {
  "Children": composeStory(m0.default, m0["Children"], "Children"),
  "Disabled": composeStory(m1.default, m1["Disabled"], "Disabled"),
  "Simple": composeStory(m2.default, m2["Simple"], "Simple"),
};
export const skipped = {
  "CustomRadioButtonGroup": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
