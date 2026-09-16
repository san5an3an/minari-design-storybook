// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m2 from "./_src/packages/react/src/components/ComboBox/ComboBox.stories__AllowCustomValue.jsx";
import * as m3 from "./_src/packages/react/src/components/ComboBox/ComboBox.stories__AutocompleteWithTypeahead.jsx";
import * as m4 from "./_src/packages/react/src/components/ComboBox/ComboBox.stories__ExperimentalAutoAlign.jsx";
import * as m7 from "./_src/packages/react/src/components/ComboBox/ComboBox.stories__Controlled.jsx";
export const demos = {
  "packages/react/src/components/ComboBox/ComboBox.stories.js#AllowCustomValue": composeStory(m2.default, m2["AllowCustomValue"], "AllowCustomValue"),
  "packages/react/src/components/ComboBox/ComboBox.stories.js#AutocompleteWithTypeahead": composeStory(m3.default, m3["AutocompleteWithTypeahead"], "AutocompleteWithTypeahead"),
  "packages/react/src/components/ComboBox/ComboBox.stories.js#ExperimentalAutoAlign": composeStory(m4.default, m4["ExperimentalAutoAlign"], "ExperimentalAutoAlign"),
  "packages/react/src/components/ComboBox/ComboBox.stories.js#Controlled": composeStory(m7.default, m7["Controlled"], "Controlled"),
};
export const skipped = {
  "packages/react/src/components/ComboBox/ComboBox.featureflag.stories.js#FloatingStyles": {"code":"package-missing","detail":"@storybook/addon-links/react"},
  "packages/react/src/components/ComboBox/ComboBox.stories.js#Default": {"code":"package-missing","detail":"storybook/actions"},
  "packages/react/src/components/ComboBox/ComboBox.stories.js#_WithLayer": {"code":"global-css","detail":"packages/react/.storybook/templates/Annotation/Annotation.scss: @keyframes (3)"},
  "packages/react/src/components/ComboBox/ComboBox.stories.js#withAILabel": {"code":"package-missing","detail":"storybook/actions"},
};
