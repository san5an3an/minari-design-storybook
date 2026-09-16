// @ts-nocheck
/* 자동 생성 — tools/gen_fluent_demos.py. 손으로 고치지 말 것. 스토리 모듈은 공식 index.stories.tsx·스토리 파일 바이트 그대로이고 첫 줄 `// @ts-nocheck` 만 더했다(모듈 경계 (a)). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react-components/react-provider/stories/src/Provider/index.stories";
export const demos = {
  "Dir": composeStory(m0.default, m0["Dir"], "Dir"),
  "ApplyStylesToPortals": composeStory(m0.default, m0["ApplyStylesToPortals"], "ApplyStylesToPortals"),
  "Frame": composeStory(m0.default, m0["Frame"], "Frame"),
};
export const skipped = {
  "Default": {"code": "self-themed", "detail": "공식 예제가 `<FluentProvider theme>` 에 webLightTheme · teamsLightTheme · teamsDarkTheme 를 직접 줘요."},
  "Nested": {"code": "self-themed", "detail": "공식 예제가 `<FluentProvider theme={webLightTheme}>` 와 부분 theme 을 직접 줘요."},
};
