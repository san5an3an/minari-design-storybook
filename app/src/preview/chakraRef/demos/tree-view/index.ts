/* 자동 생성 — tools/gen_chakra_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./tree-view-basic";
import * as m001 from "./tree-view-with-sizes";
import * as m002 from "./tree-view-with-variants";
import * as m003 from "./tree-view-with-colors";
import * as m004 from "./tree-view-disabled-node";
import * as m005 from "./tree-view-controlled-expansion";
import * as m006 from "./tree-view-explicit-expand";
import * as m007 from "./tree-view-expand-icon";
import * as m008 from "./tree-view-remove-indentation";
import * as m009 from "./tree-view-async";
import * as m010 from "./tree-view-with-filter";
import * as m011 from "./tree-view-collapse-animation";
import * as m012 from "./tree-view-expand-collapse-all";
import * as m013 from "./tree-view-with-store";
import * as m014 from "./tree-view-with-links";
import * as m015 from "./tree-view-multi-select";
import * as m016 from "./tree-view-checkbox";
import * as m017 from "./tree-view-mutation";
import * as m018 from "./tree-view-custom-icon";

/** key(원천 파일 이름) → 공식 export 그대로. */
export const DEMOS = {
  "tree-view-basic": m000.TreeViewBasic,
  "tree-view-with-sizes": m001.TreeViewWithSizes,
  "tree-view-with-variants": m002.TreeViewWithVariants,
  "tree-view-with-colors": m003.TreeViewWithColors,
  "tree-view-disabled-node": m004.TreeViewDisabledNode,
  "tree-view-controlled-expansion": m005.TreeViewControlledExpansion,
  "tree-view-explicit-expand": m006.TreeViewExplicitExpand,
  "tree-view-expand-icon": m007.TreeViewExpandIcon,
  "tree-view-remove-indentation": m008.TreeViewRemoveIndentation,
  "tree-view-async": m009.TreeViewAsync,
  "tree-view-with-filter": m010.TreeViewWithFilter,
  "tree-view-collapse-animation": m011.TreeViewCollapseAnimation,
  "tree-view-expand-collapse-all": m012.TreeViewExpandCollapseAll,
  "tree-view-with-store": m013.TreeViewWithStore,
  "tree-view-with-links": m014.TreeViewWithLinks,
  "tree-view-multi-select": m015.TreeViewMultiSelect,
  "tree-view-checkbox": m016.TreeViewCheckbox,
  "tree-view-mutation": m017.TreeViewMutation,
  "tree-view-custom-icon": m018.TreeViewCustomIcon,
};

/** 안 세운 것과 그 까닭. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {

};
