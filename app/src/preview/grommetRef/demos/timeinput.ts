// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/TimeInput/stories/Form.stories.tsx";
import * as m1 from "./_src/src/js/components/TimeInput/stories/Controlled.stories.tsx";
import * as m2 from "./_src/src/js/components/TimeInput/stories/Disabled.stories.tsx";
import * as m3 from "./_src/src/js/components/TimeInput/stories/ReadOnly.stories.tsx";
import * as m4 from "./_src/src/js/components/TimeInput/stories/Simple.stories.tsx";
import * as m5 from "./_src/src/js/components/TimeInput/stories/Step.stories.tsx";
import * as m6 from "./_src/src/js/components/TimeInput/stories/ThemingLightDark.stories.tsx";
import * as m7 from "./_src/src/js/components/TimeInput/stories/Uncontrolled.stories.tsx";
export const demos = {
  "TimeForm": composeStory(m0.default, m0["TimeForm"], "TimeForm"),
  "Controlled": composeStory(m1.default, m1["Controlled"], "Controlled"),
  "Disabled": composeStory(m2.default, m2["Disabled"], "Disabled"),
  "ReadOnly": composeStory(m3.default, m3["ReadOnly"], "ReadOnly"),
  "Simple": composeStory(m4.default, m4["Simple"], "Simple"),
  "Step": composeStory(m5.default, m5["Step"], "Step"),
  "ThemingLightDark": composeStory(m6.default, m6["ThemingLightDark"], "ThemingLightDark"),
  "Uncontrolled": composeStory(m7.default, m7["Uncontrolled"], "Uncontrolled"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
