// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m2 from "./_src/packages/react/src/components/StructuredList/StructuredList.stories__Default.jsx";
import * as m3 from "./_src/packages/react/src/components/StructuredList/StructuredList.stories__Selection.jsx";
import * as m4 from "./_src/packages/react/src/components/StructuredList/StructuredList.stories__InitialSelection.jsx";
import * as m6 from "./_src/packages/react/src/components/StructuredList/StructuredList.stories__Skeleton.jsx";
export const demos = {
  "packages/react/src/components/StructuredList/StructuredList.stories.js#Default": composeStory(m2.default, m2["Default"], "Default"),
  "packages/react/src/components/StructuredList/StructuredList.stories.js#Selection": composeStory(m3.default, m3["Selection"], "Selection"),
  "packages/react/src/components/StructuredList/StructuredList.stories.js#InitialSelection": composeStory(m4.default, m4["InitialSelection"], "InitialSelection"),
  "packages/react/src/components/StructuredList/StructuredList.stories.js#Skeleton": composeStory(m6.default, m6["Skeleton"], "Skeleton"),
};
export const skipped = {
  "packages/react/src/components/StructuredList/StructuredList.featureflag.stories.js#Selection": {"code":"package-missing","detail":"@storybook/addon-links/react"},
  "packages/react/src/components/StructuredList/StructuredList.featureflag.stories.js#WithBackgroundLayer": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
  "packages/react/src/components/StructuredList/StructuredList.stories.js#WithBackgroundLayer": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
};
