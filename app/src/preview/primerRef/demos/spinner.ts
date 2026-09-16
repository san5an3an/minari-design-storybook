// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Spinner/Spinner.stories__Default";
import * as m1 from "./_src/src/Spinner/Spinner.features.stories__Small";
import * as m2 from "./_src/src/Spinner/Spinner.features.stories__Large";
import * as m3 from "./_src/src/Spinner/Spinner.features.stories__SuppressScreenReaderText";
import * as m4 from "./_src/src/Spinner/Spinner.features.stories__WithDelay";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "Small": composeStory(m1.default, m1["Small"], "Small"),
  "Large": composeStory(m2.default, m2["Large"], "Large"),
  "SuppressScreenReaderText": composeStory(m3.default, m3["SuppressScreenReaderText"], "SuppressScreenReaderText"),
  "WithDelay": composeStory(m4.default, m4["WithDelay"], "WithDelay"),
};
export const skipped = {
};
