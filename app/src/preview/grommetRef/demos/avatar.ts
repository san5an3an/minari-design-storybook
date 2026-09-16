// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Avatar/stories/Basic.stories.js";
import * as m1 from "./_src/src/js/components/Avatar/stories/Round.stories.js";
import * as m2 from "./_src/src/js/components/Avatar/stories/Sizes.stories.js";
import * as m3 from "./_src/src/js/components/Avatar/stories/typescript/Stacked.stories.tsx";
export const demos = {
  "Basic": composeStory(m0.default, m0["Basic"], "Basic"),
  "Round": composeStory(m1.default, m1["Round"], "Round"),
  "Sizes": composeStory(m2.default, m2["Sizes"], "Sizes"),
  "Stacked": composeStory(m3.default, m3["Stacked"], "Stacked"),
};
export const skipped = {
  "Themed": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
