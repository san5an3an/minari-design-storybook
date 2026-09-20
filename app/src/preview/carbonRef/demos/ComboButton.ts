// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m1 from "./_src/packages/react/src/components/ComboButton/ComboButton.stories__Default.jsx";
import * as m2 from "./_src/packages/react/src/components/ComboButton/ComboButton.stories__ExperimentalAutoAlign.jsx";
import * as m3 from "./_src/packages/react/src/components/ComboButton/ComboButton.stories__WithDanger.jsx";
import * as m4 from "./_src/packages/react/src/components/ComboButton/ComboButton.stories__WithIcons.jsx";
export const demos = {
  "packages/react/src/components/ComboButton/ComboButton.stories.js#Default": composeStory(m1.default, m1["Default"], "Default"),
  "packages/react/src/components/ComboButton/ComboButton.stories.js#ExperimentalAutoAlign": composeStory(m2.default, m2["ExperimentalAutoAlign"], "ExperimentalAutoAlign"),
  "packages/react/src/components/ComboButton/ComboButton.stories.js#WithDanger": composeStory(m3.default, m3["WithDanger"], "WithDanger"),
  "packages/react/src/components/ComboButton/ComboButton.stories.js#WithIcons": composeStory(m4.default, m4["WithIcons"], "WithIcons"),
};
export const skipped = {
  "packages/react/src/components/ComboButton/ComboButton.featureflag.stories.js#FloatingStyles": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
};
