/* 자동 생성 — tools/gen_mui_demos.py. 손으로 고치지 말 것. */
import type { DemoSet } from "../types";
import D0 from "./00-basic-list";
import D1 from "./01-nested-list";
import D2 from "./02-folder-list";
import D3 from "./03-interactive-list";
import D4 from "./04-selected-list-item";
import D5 from "./05-align-items-list";
import D6 from "./06-checkbox-list";
import D7 from "./07-checkbox-list-secondary";
import D8 from "./08-switch-list-secondary";
import D9 from "./09-pinned-subheader-list";
import D10 from "./10-inset-list";
import D11 from "./11-gutterless-list";
import D12 from "./13-customized-list";

export const DEMOS: DemoSet = {
  "BasicList": D0,
  "NestedList": D1,
  "FolderList": D2,
  "InteractiveList": D3,
  "SelectedListItem": D4,
  "AlignItemsList": D5,
  "CheckboxList": D6,
  "CheckboxListSecondary": D7,
  "SwitchListSecondary": D8,
  "PinnedSubheaderList": D9,
  "InsetList": D10,
  "GutterlessList": D11,
  "CustomizedList": D12,
};

/** 못 세운 예제와 **그 까닭**. 화면이 이 말을 그대로 적는다. */
export const SKIPPED: Record<string, string> = {
  "VirtualizedList": "이 예제는 우리가 안 가진 패키지(react-window)를 불러요.",
};
