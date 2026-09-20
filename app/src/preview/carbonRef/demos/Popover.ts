// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m1 from "./_src/packages/react/src/components/Popover/Popover.stories__TabTip.jsx";
import * as m2 from "./_src/packages/react/src/components/Popover/Popover.stories__Default.jsx";
import * as m3 from "./_src/packages/react/src/components/Popover/Popover.stories__ExperimentalAutoAlign.jsx";
import * as m4 from "./_src/packages/react/src/components/Popover/Popover.stories__ExperimentalAutoAlignBoundary.jsx";
import * as m5 from "./_src/packages/react/src/components/Popover/Popover.stories__TabTipExperimentalAutoAlign.jsx";
export const demos = {
  "packages/react/src/components/Popover/Popover.stories.js#TabTip": composeStory(m1.default, m1["TabTip"], "TabTip"),
  "packages/react/src/components/Popover/Popover.stories.js#Default": composeStory(m2.default, m2["Default"], "Default"),
  "packages/react/src/components/Popover/Popover.stories.js#ExperimentalAutoAlign": composeStory(m3.default, m3["ExperimentalAutoAlign"], "ExperimentalAutoAlign"),
  "packages/react/src/components/Popover/Popover.stories.js#ExperimentalAutoAlignBoundary": composeStory(m4.default, m4["ExperimentalAutoAlignBoundary"], "ExperimentalAutoAlignBoundary"),
  "packages/react/src/components/Popover/Popover.stories.js#TabTipExperimentalAutoAlign": composeStory(m5.default, m5["TabTipExperimentalAutoAlign"], "TabTipExperimentalAutoAlign"),
};
export const skipped = {
  "packages/react/src/components/Popover/Popover.featureflag.stories.js#FloatingStyles": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
};
