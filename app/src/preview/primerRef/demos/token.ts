// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Token/Token.stories__Default";
import * as m1 from "./_src/src/Token/Token.features.stories__InteractiveToken";
import * as m2 from "./_src/src/Token/Token.features.stories__TokenWithLeadingVisual";
import * as m3 from "./_src/src/Token/Token.features.stories__TokenWithOnRemoveFn";
import * as m4 from "./_src/src/Token/Token.features.stories__DefaultIssueLabelToken";
import * as m5 from "./_src/src/Token/Token.features.stories__InteractiveIssueLabelToken";
import * as m6 from "./_src/src/Token/Token.features.stories__IssueLabelTokenWithOnRemoveFn";
import * as m7 from "./_src/src/Token/Token.features.stories__SmallToken";
import * as m8 from "./_src/src/Token/Token.features.stories__LargeToken";
import * as m9 from "./_src/src/Token/Token.features.stories__XLargeToken";
import * as m10 from "./_src/src/Token/Token.features.stories__IssueLabelTokenCustomColors";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "InteractiveToken": composeStory(m1.default, m1["InteractiveToken"], "InteractiveToken"),
  "TokenWithLeadingVisual": composeStory(m2.default, m2["TokenWithLeadingVisual"], "TokenWithLeadingVisual"),
  "TokenWithOnRemoveFn": composeStory(m3.default, m3["TokenWithOnRemoveFn"], "TokenWithOnRemoveFn"),
  "DefaultIssueLabelToken": composeStory(m4.default, m4["DefaultIssueLabelToken"], "DefaultIssueLabelToken"),
  "InteractiveIssueLabelToken": composeStory(m5.default, m5["InteractiveIssueLabelToken"], "InteractiveIssueLabelToken"),
  "IssueLabelTokenWithOnRemoveFn": composeStory(m6.default, m6["IssueLabelTokenWithOnRemoveFn"], "IssueLabelTokenWithOnRemoveFn"),
  "SmallToken": composeStory(m7.default, m7["SmallToken"], "SmallToken"),
  "LargeToken": composeStory(m8.default, m8["LargeToken"], "LargeToken"),
  "XLargeToken": composeStory(m9.default, m9["XLargeToken"], "XLargeToken"),
  "IssueLabelTokenCustomColors": composeStory(m10.default, m10["IssueLabelTokenCustomColors"], "IssueLabelTokenCustomColors"),
};
export const skipped = {
};
