// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Collapsible/stories/Simple.stories.js";
import * as m1 from "./_src/src/js/components/Collapsible/stories/Horizontal.stories.js";
import * as m2 from "./_src/src/js/components/Collapsible/stories/Nested.stories.js";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Horizontal": composeStory(m1.default, m1["Horizontal"], "Horizontal"),
  "Nested": composeStory(m2.default, m2["Nested"], "Nested"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
