// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m1 from "./_src/packages/react/src/components/Toggle/Toggle.stories__Default.jsx";
import * as m2 from "./_src/packages/react/src/components/Toggle/Toggle.stories__SmallToggle.jsx";
import * as m3 from "./_src/packages/react/src/components/Toggle/Toggle.stories__WithAccessibleLabels.jsx";
import * as m4 from "./_src/packages/react/src/components/Toggle/Toggle.stories__Skeleton.jsx";
export const demos = {
  "packages/react/src/components/Toggle/Toggle.stories.js#Default": composeStory(m1.default, m1["Default"], "Default"),
  "packages/react/src/components/Toggle/Toggle.stories.js#SmallToggle": composeStory(m2.default, m2["SmallToggle"], "SmallToggle"),
  "packages/react/src/components/Toggle/Toggle.stories.js#WithAccessibleLabels": composeStory(m3.default, m3["WithAccessibleLabels"], "WithAccessibleLabels"),
  "packages/react/src/components/Toggle/Toggle.stories.js#Skeleton": composeStory(m4.default, m4["Skeleton"], "Skeleton"),
};
export const skipped = {
  "packages/react/src/components/Toggle/Toggle.featureflag.stories.js#_Toggle": {"code":"global-css","detail":"packages/react/src/components/Toggle/toggle-story.scss: @keyframes (3)"},
};
