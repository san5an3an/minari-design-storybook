// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/Skeleton/stories/GridContainer.stories.js";
import * as m1 from "./_src/src/js/components/Skeleton/stories/Simple.stories.js";
export const demos = {
  "GridContainer": composeStory(m0.default, m0["GridContainer"], "GridContainer"),
  "Simple": composeStory(m1.default, m1["Simple"], "Simple"),
};
export const skipped = {
  "Custom": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "Group": {"code":"self-themed","detail":"스토리가 스스로 <Grommet> 을 그린다"},
  "Individual": {"code":"self-themed","detail":"스토리가 스스로 <Grommet> 을 그린다"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
