// @ts-nocheck
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
