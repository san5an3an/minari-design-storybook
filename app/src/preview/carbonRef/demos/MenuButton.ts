// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m2 from "./_src/packages/react/src/components/MenuButton/MenuButton.stories__ExperimentalAutoAlign.jsx";
import * as m3 from "./_src/packages/react/src/components/MenuButton/MenuButton.stories__WithDanger.jsx";
import * as m4 from "./_src/packages/react/src/components/MenuButton/MenuButton.stories__WithDividers.jsx";
import * as m5 from "./_src/packages/react/src/components/MenuButton/MenuButton.stories__WithIcons.jsx";
import * as m6 from "./_src/packages/react/src/components/MenuButton/MenuButton.stories__WithNestedMenu.jsx";
import * as m7 from "./_src/packages/react/src/components/MenuButton/MenuButton.stories__WithMenuAlignment.jsx";
export const demos = {
  "packages/react/src/components/MenuButton/MenuButton.stories.js#ExperimentalAutoAlign": composeStory(m2.default, m2["ExperimentalAutoAlign"], "ExperimentalAutoAlign"),
  "packages/react/src/components/MenuButton/MenuButton.stories.js#WithDanger": composeStory(m3.default, m3["WithDanger"], "WithDanger"),
  "packages/react/src/components/MenuButton/MenuButton.stories.js#WithDividers": composeStory(m4.default, m4["WithDividers"], "WithDividers"),
  "packages/react/src/components/MenuButton/MenuButton.stories.js#WithIcons": composeStory(m5.default, m5["WithIcons"], "WithIcons"),
  "packages/react/src/components/MenuButton/MenuButton.stories.js#WithNestedMenu": composeStory(m6.default, m6["WithNestedMenu"], "WithNestedMenu"),
  "packages/react/src/components/MenuButton/MenuButton.stories.js#WithMenuAlignment": composeStory(m7.default, m7["WithMenuAlignment"], "WithMenuAlignment"),
};
export const skipped = {
  "packages/react/src/components/MenuButton/MenuButton.featureflag.stories.js#FloatingStyles": {"code":"package-missing","detail":"@storybook/addon-links/react"},
  "packages/react/src/components/MenuButton/MenuButton.stories.js#Default": {"code":"package-missing","detail":"storybook/actions"},
};
