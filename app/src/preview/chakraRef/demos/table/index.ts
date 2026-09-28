/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./table-basic";
import * as m001 from "./table-with-sizes";
import * as m002 from "./table-with-variants";
import * as m003 from "./table-with-striped";
import * as m004 from "./table-with-caption";
import * as m005 from "./table-with-caption-top";
import * as m006 from "./table-with-column-border";
import * as m007 from "./table-with-overflow";
import * as m008 from "./table-with-sticky-header";
import * as m009 from "./table-with-sticky-column";
import * as m010 from "./table-with-sticky-header-and-column";
import * as m011 from "./table-with-interactive";
import * as m012 from "./table-with-pagination";
import * as m013 from "./table-with-selection";
import * as m014 from "./table-with-selection-action-bar";
import * as m015 from "./table-with-column-group";
import * as m016 from "./table-with-native";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "table-basic": m000.TableBasic,
  "table-with-sizes": m001.TableWithSizes,
  "table-with-variants": m002.TableWithVariants,
  "table-with-striped": m003.TableWithStriped,
  "table-with-caption": m004.TableWithCaption,
  "table-with-caption-top": m005.TableWithCaptionTop,
  "table-with-column-border": m006.TableWithColumnBorder,
  "table-with-overflow": m007.TableWithOverflow,
  "table-with-sticky-header": m008.TableWithStickyHeader,
  "table-with-sticky-column": m009.TableWithStickyColumn,
  "table-with-sticky-header-and-column": m010.TableWithStickyHeaderAndColumn,
  "table-with-interactive": m011.TableWithInteractive,
  "table-with-pagination": m012.TableWithPagination,
  "table-with-selection": m013.TableWithSelection,
  "table-with-selection-action-bar": m014.TableWithSelectionActionBar,
  "table-with-column-group": m015.TableWithColumnGroup,
  "table-with-native": m016.TableWithNative,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "table-with-tanstack": {"code": "package-missing", "codes": ["package-missing"], "detail": "버전 불일치(major 다름 — 설치본 API가 공식 예제와 안 맞을 수 있다): @tanstack/react-table: 공식 기대 8.21.3 vs 설치본 9.1.2(major 다름)"},
};
