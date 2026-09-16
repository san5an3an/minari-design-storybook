// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/ConfirmationDialog/ConfirmationDialog.stories__Default";
import * as m1 from "./_src/src/ConfirmationDialog/ConfirmationDialog.features.stories__ShorthandHook";
import * as m2 from "./_src/src/ConfirmationDialog/ConfirmationDialog.features.stories__ShorthandHookFromActionMenu";
import * as m3 from "./_src/src/ConfirmationDialog/ConfirmationDialog.features.stories__LoadingStates";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "ShorthandHook": composeStory(m1.default, m1["ShorthandHook"], "ShorthandHook"),
  "ShorthandHookFromActionMenu": composeStory(m2.default, m2["ShorthandHookFromActionMenu"], "ShorthandHookFromActionMenu"),
  "LoadingStates": composeStory(m3.default, m3["LoadingStates"], "LoadingStates"),
};
export const skipped = {
};
