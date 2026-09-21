// @ts-nocheck
/* 자동 생성 — tools/gen_primer_demos.mjs. 손으로 고치지 말 것. 스토리 모듈은 공식 스토리 파일의 최상위 선언 바이트 그대로(⑤ import 치환만). */
import { composeStory } from "../../storybookCompose";
import * as m0 from "./_src/src/DataTable/DataTable.stories__Default";
import * as m1 from "./_src/src/DataTable/DataTable.features.stories__WithTitle";
import * as m2 from "./_src/src/DataTable/DataTable.features.stories__WithTitleAndSubtitle";
import * as m3 from "./_src/src/DataTable/DataTable.features.stories__WithSorting";
import * as m4 from "./_src/src/DataTable/DataTable.features.stories__WithActions";
import * as m5 from "./_src/src/DataTable/DataTable.features.stories__WithAction";
import * as m9 from "./_src/src/DataTable/DataTable.features.stories__WithCustomHeading";
import * as m10 from "./_src/src/DataTable/DataTable.features.stories__WithNoContent";
import * as m11 from "./_src/src/DataTable/DataTable.features.stories__WithLoading";
import * as u0 from "./_src/src/DataTable/DataTable.features.stories__WithRowAction";
import * as u1 from "./_src/src/DataTable/DataTable.features.stories__WithRowActions";
import * as u2 from "./_src/src/DataTable/DataTable.features.stories__WithRowActionMenu";
export const demos = {
  "WithRowAction": composeStory(u0.default, u0["WithRowAction"], "WithRowAction"),
  "WithRowActions": composeStory(u1.default, u1["WithRowActions"], "WithRowActions"),
  "WithRowActionMenu": composeStory(u2.default, u2["WithRowActionMenu"], "WithRowActionMenu"),
  "Default": composeStory(m0.default, m0["Default"], "Default"),
  "WithTitle": composeStory(m1.default, m1["WithTitle"], "WithTitle"),
  "WithTitleAndSubtitle": composeStory(m2.default, m2["WithTitleAndSubtitle"], "WithTitleAndSubtitle"),
  "WithSorting": composeStory(m3.default, m3["WithSorting"], "WithSorting"),
  "WithActions": composeStory(m4.default, m4["WithActions"], "WithActions"),
  "WithAction": composeStory(m5.default, m5["WithAction"], "WithAction"),
  "WithCustomHeading": composeStory(m9.default, m9["WithCustomHeading"], "WithCustomHeading"),
  "WithNoContent": composeStory(m10.default, m10["WithNoContent"], "WithNoContent"),
  "WithLoading": composeStory(m11.default, m11["WithLoading"], "WithLoading"),
};
export const skipped = {
  "WithPagination": {"code":"private-api","detail":"alphanumeric — 공개 진입점 넷에 같은 값 없음(DataTable/sorting.js)"},
};
