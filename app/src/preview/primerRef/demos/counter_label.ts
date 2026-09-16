// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/CounterLabel/CounterLabel.stories__Default";
import * as m1 from "./_src/src/CounterLabel/CounterLabel.features.stories__PrimaryTheme";
import * as m2 from "./_src/src/CounterLabel/CounterLabel.features.stories__SecondaryTheme";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "PrimaryTheme": composeStory(m1.default, m1["PrimaryTheme"], "PrimaryTheme"),
  "SecondaryTheme": composeStory(m2.default, m2["SecondaryTheme"], "SecondaryTheme"),
};
export const skipped = {
};
