// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react/src/components/FluidTextArea/FluidTextArea.stories__Default.jsx";
import * as m2 from "./_src/packages/react/src/components/FluidTextArea/FluidTextArea.stories__DefaultWithToggletip.jsx";
import * as m3 from "./_src/packages/react/src/components/FluidTextArea/FluidTextArea.stories__Skeleton.jsx";
export const demos = {
  "packages/react/src/components/FluidTextArea/FluidTextArea.stories.js#Default": composeStory(m0.default, m0["Default"], "Default"),
  "packages/react/src/components/FluidTextArea/FluidTextArea.stories.js#DefaultWithToggletip": composeStory(m2.default, m2["DefaultWithToggletip"], "DefaultWithToggletip"),
  "packages/react/src/components/FluidTextArea/FluidTextArea.stories.js#Skeleton": composeStory(m3.default, m3["Skeleton"], "Skeleton"),
};
export const skipped = {
  "packages/react/src/components/FluidTextArea/FluidTextArea.stories.js#DefaultWithLayers": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
};
