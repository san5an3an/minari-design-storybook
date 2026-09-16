// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react-components/react-motion/stories/src/Motion/index.stories";
export const demos = {
  "CustomMotion": composeStory(m0.default, m0["CustomMotion"], "CustomMotion"),
  "DirectParams": composeStory(m0.default, m0["DirectParams"], "DirectParams"),
};
export const skipped = {
"DisableMotion": {"code": "other", "detail": "공식 문서가 이 스토리를 페이지에 싣지 않아서(skipPrimaryStory) 여기에도 싣지 않았어요."},
};
