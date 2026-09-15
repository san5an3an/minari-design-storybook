// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/WorldMap/stories/Color.stories.js";
import * as m1 from "./_src/src/js/components/WorldMap/stories/Continents.stories.js";
import * as m2 from "./_src/src/js/components/WorldMap/stories/Places.stories.js";
import * as m3 from "./_src/src/js/components/WorldMap/stories/SelectPlace.stories.js";
import * as m4 from "./_src/src/js/components/WorldMap/stories/Simple.stories.js";
export const demos = {
  "Color": composeStory(m0.default, m0["Color"], "Color"),
  "Continents": composeStory(m1.default, m1["Continents"], "Continents"),
  "Places": composeStory(m2.default, m2["Places"], "Places"),
  "SelectPlace": composeStory(m3.default, m3["SelectPlace"], "SelectPlace"),
  "Simple": composeStory(m4.default, m4["Simple"], "Simple"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
