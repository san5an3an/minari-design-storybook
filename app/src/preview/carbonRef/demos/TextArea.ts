// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react/src/components/TextArea/TextArea.stories__Default.jsx";
import * as m2 from "./_src/packages/react/src/components/TextArea/TextArea.stories__withAILabel.jsx";
import * as m3 from "./_src/packages/react/src/components/TextArea/TextArea.stories__Skeleton.jsx";
export const demos = {
  "packages/react/src/components/TextArea/TextArea.stories.js#Default": composeStory(m0.default, m0["Default"], "Default"),
  "packages/react/src/components/TextArea/TextArea.stories.js#withAILabel": composeStory(m2.default, m2["withAILabel"], "withAILabel"),
  "packages/react/src/components/TextArea/TextArea.stories.js#Skeleton": composeStory(m3.default, m3["Skeleton"], "Skeleton"),
};
export const skipped = {
  "packages/react/src/components/TextArea/TextArea.stories.js#_WithLayer": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
};
