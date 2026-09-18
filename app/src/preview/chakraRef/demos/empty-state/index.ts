import * as m000 from "./empty-state-basic";
import * as m001 from "./empty-state-sizes";
import * as m002 from "./empty-state-with-action";
import * as m003 from "./empty-state-with-list";

export const DEMOS = {
  "empty-state-basic": m000.EmptyStateBasic,
  "empty-state-sizes": m001.EmptyStateSizes,
  "empty-state-with-action": m002.EmptyStateWithAction,
  "empty-state-with-list": m003.EmptyStateWithList,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
