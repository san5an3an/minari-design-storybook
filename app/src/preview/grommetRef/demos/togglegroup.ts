// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/ToggleGroup/stories/Controlled.stories.js";
import * as m1 from "./_src/src/js/components/ToggleGroup/stories/multiple.stories.tsx";
import * as m2 from "./_src/src/js/components/ToggleGroup/stories/simple.stories.js";
export const demos = {
  "Controlled": composeStory(m0.default, m0["Controlled"], "Controlled"),
  "Multiple": composeStory(m1.default, m1["Multiple"], "Multiple"),
  "Simple": composeStory(m2.default, m2["Simple"], "Simple"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
