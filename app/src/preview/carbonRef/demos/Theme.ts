// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react/src/components/Theme/Theme.stories__Default.jsx";
import * as m1 from "./_src/packages/react/src/components/Theme/Theme.stories__UseTheme.jsx";
import * as m2 from "./_src/packages/react/src/components/Theme/Theme.stories__UsePrefersDarkScheme.jsx";
export const demos = {
  "packages/react/src/components/Theme/Theme.stories.js#Default": composeStory(m0.default, m0["Default"], "Default"),
  "packages/react/src/components/Theme/Theme.stories.js#UseTheme": composeStory(m1.default, m1["UseTheme"], "UseTheme"),
  "packages/react/src/components/Theme/Theme.stories.js#UsePrefersDarkScheme": composeStory(m2.default, m2["UsePrefersDarkScheme"], "UsePrefersDarkScheme"),
};
export const skipped = {
  "packages/react/src/components/Theme/Theme.stories.js#_WithLayer": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
};
