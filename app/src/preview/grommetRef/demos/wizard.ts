// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Wizard/stories/BasicLinear.stories.js";
import * as m1 from "./_src/src/js/components/Wizard/stories/Branching.stories.js";
import * as m2 from "./_src/src/js/components/Wizard/stories/Composable.stories.js";
import * as m3 from "./_src/src/js/components/Wizard/stories/Controlled.stories.js";
import * as m4 from "./_src/src/js/components/Wizard/stories/LongContent.stories.js";
import * as m5 from "./_src/src/js/components/Wizard/stories/Modal.stories.js";
import * as m6 from "./_src/src/js/components/Wizard/stories/NestedSubSteps.stories.js";
import * as m7 from "./_src/src/js/components/Wizard/stories/Validation.stories.js";
export const demos = {
  "BasicLinear": composeStory(m0.default, m0["BasicLinear"], "BasicLinear"),
  "Branching": composeStory(m1.default, m1["Branching"], "Branching"),
  "Composable": composeStory(m2.default, m2["Composable"], "Composable"),
  "Controlled": composeStory(m3.default, m3["Controlled"], "Controlled"),
  "LongContent": composeStory(m4.default, m4["LongContent"], "LongContent"),
  "Modal": composeStory(m5.default, m5["Modal"], "Modal"),
  "NestedSubSteps": composeStory(m6.default, m6["NestedSubSteps"], "NestedSubSteps"),
  "Validation": composeStory(m7.default, m7["Validation"], "Validation"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
