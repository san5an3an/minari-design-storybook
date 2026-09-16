// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/CheckBoxGroup/stories/Children.stories.js";
import * as m1 from "./_src/src/js/components/CheckBoxGroup/stories/Disabled.stories.js";
import * as m2 from "./_src/src/js/components/CheckBoxGroup/stories/InitialValues.stories.js";
import * as m3 from "./_src/src/js/components/CheckBoxGroup/stories/Simple.stories.js";
export const demos = {
  "Children": composeStory(m0.default, m0["Children"], "Children"),
  "Disabled": composeStory(m1.default, m1["Disabled"], "Disabled"),
  "InitialValues": composeStory(m2.default, m2["InitialValues"], "InitialValues"),
  "Simple": composeStory(m3.default, m3["Simple"], "Simple"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
