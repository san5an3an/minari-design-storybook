// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/DataSearch/stories/Drop.stories.js";
import * as m1 from "./_src/src/js/components/DataSearch/stories/Responsive.stories.js";
import * as m2 from "./_src/src/js/components/DataSearch/stories/Simple.stories.js";
import * as m3 from "./_src/src/js/components/DataSearch/stories/UpdateOnSubmit.stories.js";
export const demos = {
  "Drop": composeStory(m0.default, m0["Drop"], "Drop"),
  "Responsive": composeStory(m1.default, m1["Responsive"], "Responsive"),
  "Simple": composeStory(m2.default, m2["Simple"], "Simple"),
  "UpdateOnSubmit": composeStory(m3.default, m3["UpdateOnSubmit"], "UpdateOnSubmit"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
