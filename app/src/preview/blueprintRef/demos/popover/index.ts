import * as m000 from "./popoverPlacementExample-tsx__reactExample__1";
import * as m001 from "./popoverInteractionKindExample-tsx__reactExample__1";
import * as m002 from "./popoverDismissExample-tsx__reactExample__1";
import * as m003 from "./popoverPortalExample-tsx__reactExample__1";
import * as m004 from "./popoverSizingExample-tsx__reactExample__1";
import * as m005 from "./popoverMinimalExample-tsx__reactExample__1";

export const DEMOS = {
  "popoverPlacementExample-tsx__reactExample__1": m000.PopoverPlacementExample,
  "popoverInteractionKindExample-tsx__reactExample__1": m001.PopoverInteractionKindExample,
  "popoverDismissExample-tsx__reactExample__1": m002.PopoverDismissExample,
  "popoverPortalExample-tsx__reactExample__1": m003.PopoverPortalExample,
  "popoverSizingExample-tsx__reactExample__1": m004.PopoverSizingExample,
  "popoverMinimalExample-tsx__reactExample__1": m005.PopoverMinimalExample,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "popoverExample-tsx__reactExample__1": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: @blueprintjs/select/examples"},
};

export const PENDING: Record<string, { reason: string; detail: string }> = {
  "popover-mdx__fence__1": {"reason": "fenced-code", "detail": "공식 사이트가 화면에 그리지 않는 코드 블록이라 싣지 않았어요."},
  "popover-mdx__fence__2": {"reason": "fenced-code", "detail": "공식 사이트가 화면에 그리지 않는 코드 블록이라 싣지 않았어요."},
};
