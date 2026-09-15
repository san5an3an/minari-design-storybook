// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Stack/stories/Fill.stories.js";
import * as m1 from "./_src/src/js/components/Stack/stories/Simple.stories.js";
export const demos = {
  "Fill": composeStory(m0.default, m0["Fill"], "Fill"),
  "Simple": composeStory(m1.default, m1["Simple"], "Simple"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
