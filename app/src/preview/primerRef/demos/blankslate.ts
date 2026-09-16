// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Blankslate/Blankslate.stories__Default";
import * as m1 from "./_src/src/Blankslate/Blankslate.features.stories__WithVisual";
import * as m2 from "./_src/src/Blankslate/Blankslate.features.stories__WithPrimaryActionAsLink";
import * as m3 from "./_src/src/Blankslate/Blankslate.features.stories__WithPrimaryActionAsButton";
import * as m4 from "./_src/src/Blankslate/Blankslate.features.stories__WithSecondaryAction";
import * as m5 from "./_src/src/Blankslate/Blankslate.features.stories__WithBorder";
import * as m6 from "./_src/src/Blankslate/Blankslate.features.stories__Narrow";
import * as m7 from "./_src/src/Blankslate/Blankslate.features.stories__Spacious";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "WithVisual": composeStory(m1.default, m1["WithVisual"], "WithVisual"),
  "WithPrimaryActionAsLink": composeStory(m2.default, m2["WithPrimaryActionAsLink"], "WithPrimaryActionAsLink"),
  "WithPrimaryActionAsButton": composeStory(m3.default, m3["WithPrimaryActionAsButton"], "WithPrimaryActionAsButton"),
  "WithSecondaryAction": composeStory(m4.default, m4["WithSecondaryAction"], "WithSecondaryAction"),
  "WithBorder": composeStory(m5.default, m5["WithBorder"], "WithBorder"),
  "Narrow": composeStory(m6.default, m6["Narrow"], "Narrow"),
  "Spacious": composeStory(m7.default, m7["Spacious"], "Spacious"),
};
export const skipped = {
};
