// @ts-nocheck
/* 자동 생성 — tools/gen_grommet_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일 바이트 그대로이고 ⑤ 대상 import 문만 바뀌었다. */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/js/components/DateTimeInput/stories/Form.stories.tsx";
import * as m1 from "./_src/src/js/components/DateTimeInput/stories/Inline.stories.tsx";
import * as m2 from "./_src/src/js/components/DateTimeInput/stories/Locale.stories.tsx";
import * as m3 from "./_src/src/js/components/DateTimeInput/stories/Simple.stories.tsx";
export const demos = {
  "FormIntegration": composeStory(m0.default, m0["FormIntegration"], "FormIntegration"),
  "Inline": composeStory(m1.default, m1["Inline"], "Inline"),
  "Locale": composeStory(m2.default, m2["Locale"], "Locale"),
  "Simple": composeStory(m3.default, m3["Simple"], "Simple"),
};
export const skipped = {
  "CustomThemed": {"code":"base-theme-only","detail":"공식 storybook 이 base 테마에서만 보여 주는 title 셋째 조각 Custom Themed(preview.js :16 CUSTOM_THEMED · :105 kind.split('/')[2])"},
  "playground:0": {"code":"not-an-example","detail":"ComponentDoc code — 모듈이 아닌 문자열을 사이트가 react-live 로 실행한다(react-live 미설치)"},
};
