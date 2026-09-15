// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Cards/stories/Children.stories.js";
import * as m1 from "./_src/src/js/components/Cards/stories/onOrder.stories.js";
import * as m2 from "./_src/src/js/components/Cards/stories/Paginated.stories.js";
import * as m3 from "./_src/src/js/components/Cards/stories/Simple.stories.js";
import * as m4 from "./_src/src/js/components/Cards/stories/Sizable.stories.js";
export const demos = {
  "Children": composeStory(m0.default, m0["Children"], "Children"),
  "OnOrder": composeStory(m1.default, m1["OnOrder"], "OnOrder"),
  "Paginated": composeStory(m2.default, m2["Paginated"], "Paginated"),
  "Simple": composeStory(m3.default, m3["Simple"], "Simple"),
  "Sizable": composeStory(m4.default, m4["Sizable"], "Sizable"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
