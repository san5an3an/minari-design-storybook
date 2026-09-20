// @ts-nocheck
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/packages/react/src/components/Pagination/Pagination.stories__Default.jsx";
import * as m2 from "./_src/packages/react/src/components/Pagination/Pagination.stories__MultiplePaginationComponents.jsx";
import * as m3 from "./_src/packages/react/src/components/Pagination/Pagination.stories__PaginationWithCustomPageSizesLabel.jsx";
import * as m4 from "./_src/packages/react/src/components/Pagination/Pagination.stories__PaginationUnknownPages.jsx";
import * as m5 from "./_src/packages/react/src/components/Pagination/Pagination.stories__WithoutPageSizes.jsx";
import * as m6 from "./_src/packages/react/src/components/Pagination/Pagination.stories__WithRenderPageSelect.jsx";
export const demos = {
  "packages/react/src/components/Pagination/Pagination.stories.js#Default": composeStory(m0.default, m0["Default"], "Default"),
  "packages/react/src/components/Pagination/Pagination.stories.js#MultiplePaginationComponents": composeStory(m2.default, m2["MultiplePaginationComponents"], "MultiplePaginationComponents"),
  "packages/react/src/components/Pagination/Pagination.stories.js#PaginationWithCustomPageSizesLabel": composeStory(m3.default, m3["PaginationWithCustomPageSizesLabel"], "PaginationWithCustomPageSizesLabel"),
  "packages/react/src/components/Pagination/Pagination.stories.js#PaginationUnknownPages": composeStory(m4.default, m4["PaginationUnknownPages"], "PaginationUnknownPages"),
  "packages/react/src/components/Pagination/Pagination.stories.js#WithoutPageSizes": composeStory(m5.default, m5["WithoutPageSizes"], "WithoutPageSizes"),
  "packages/react/src/components/Pagination/Pagination.stories.js#WithRenderPageSelect": composeStory(m6.default, m6["WithRenderPageSelect"], "WithRenderPageSelect"),
};
export const skipped = {
  "packages/react/src/components/Pagination/Pagination.stories.js#TooltipHover": {"code":"package-missing","detail":"@testing-library/user-event"},
};
