// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Text/stories/All.stories.js";
import * as m1 from "./_src/src/js/components/Text/stories/Tip.stories.js";
import * as m2 from "./_src/src/js/components/Text/stories/WordBreak.stories.js";
export const demos = {
  "All": composeStory(m0.default, m0["All"], "All"),
  "Tip": composeStory(m1.default, m1["Tip"], "Tip"),
  "WordBreak": composeStory(m2.default, m2["WordBreak"], "WordBreak"),
};
export const skipped = {
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
