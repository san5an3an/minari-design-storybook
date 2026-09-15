// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Spinner/stories/Animation.stories.js";
import * as m1 from "./_src/src/js/components/Spinner/stories/Announced.stories.js";
import * as m2 from "./_src/src/js/components/Spinner/stories/Border.stories.js";
import * as m3 from "./_src/src/js/components/Spinner/stories/ChildrenSpinner.stories.js";
import * as m4 from "./_src/src/js/components/Spinner/stories/Color.stories.js";
import * as m5 from "./_src/src/js/components/Spinner/stories/Modal.stories.js";
import * as m6 from "./_src/src/js/components/Spinner/stories/Round.stories.js";
import * as m7 from "./_src/src/js/components/Spinner/stories/Simple.stories.js";
import * as m8 from "./_src/src/js/components/Spinner/stories/Size.stories.js";
export const demos = {
  "Animation": composeStory(m0.default, m0["Animation"], "Animation"),
  "Announced": composeStory(m1.default, m1["Announced"], "Announced"),
  "Border": composeStory(m2.default, m2["Border"], "Border"),
  "Children": composeStory(m3.default, m3["Children"], "Children"),
  "Color": composeStory(m4.default, m4["Color"], "Color"),
  "Modal": composeStory(m5.default, m5["Modal"], "Modal"),
  "Round": composeStory(m6.default, m6["Round"], "Round"),
  "Simple": composeStory(m7.default, m7["Simple"], "Simple"),
  "Size": composeStory(m8.default, m8["Size"], "Size"),
};
export const skipped = {
  "ThemedIcon": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "ThemedSpinner": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
