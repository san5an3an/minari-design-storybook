// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/Pagination/Pagination.stories__Default";
import * as m1 from "./_src/src/Pagination/Pagination.features.stories__LargerPageCountMargin";
import * as m2 from "./_src/src/Pagination/Pagination.features.stories__HidePageNumbers";
import * as m3 from "./_src/src/Pagination/Pagination.features.stories__HidePageNumbersByViewport";
import * as m4 from "./_src/src/Pagination/Pagination.features.stories__HigherSurroundingPageCount";
export const demos = {
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "LargerPageCountMargin": composeStory(m1.default, m1["LargerPageCountMargin"], "LargerPageCountMargin"),
  "HidePageNumbers": composeStory(m2.default, m2["HidePageNumbers"], "HidePageNumbers"),
  "HidePageNumbersByViewport": composeStory(m3.default, m3["HidePageNumbersByViewport"], "HidePageNumbersByViewport"),
  "HigherSurroundingPageCount": composeStory(m4.default, m4["HigherSurroundingPageCount"], "HigherSurroundingPageCount"),
};
export const skipped = {
};
