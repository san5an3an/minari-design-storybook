// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Tip/stories/Caret.stories.js";
import * as m1 from "./_src/src/js/components/Tip/stories/HeaderActions.stories.js";
import * as m2 from "./_src/src/js/components/Tip/stories/InfoTip.stories.js";
import * as m3 from "./_src/src/js/components/Tip/stories/typescript/Animated.stories.tsx";
import * as m4 from "./_src/src/js/components/Tip/stories/typescript/Children.stories.tsx";
import * as m5 from "./_src/src/js/components/Tip/stories/typescript/Simple.stories.tsx";
export const demos = {
  "Caret": composeStory(m0.default, m0["Caret"], "Caret"),
  "HeaderActions": composeStory(m1.default, m1["HeaderActions"], "HeaderActions"),
  "Info": composeStory(m2.default, m2["Info"], "Info"),
  "Animated": composeStory(m3.default, m3["Animated"], "Animated"),
  "Children": composeStory(m4.default, m4["Children"], "Children"),
  "Simple": composeStory(m5.default, m5["Simple"], "Simple"),
};
export const skipped = {
  "ResponsiveTip": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "SidebarTip": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "Themed": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
