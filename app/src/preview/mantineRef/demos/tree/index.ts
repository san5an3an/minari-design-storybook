import * as m000 from "../_src/demos/core/Tree/Tree.demo.usage";
import * as m001 from "../_src/demos/core/Tree/Tree.demo.renderNode";
import * as m002 from "../_src/demos/core/Tree/Tree.demo.controller";
import * as m003 from "../_src/demos/core/Tree/Tree.demo.checked";
import * as m004 from "../_src/demos/core/Tree/Tree.demo.checkAllNodes";
import * as m005 from "../_src/demos/core/Tree/Tree.demo.expandedState";
import * as m006 from "../_src/demos/core/Tree/Tree.demo.files";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "renderNode": m001.renderNode,
  "controller": m002.controller,
  "checked": m003.checked,
  "checkAllNodes": m004.checkAllNodes,
  "expandedState": m005.expandedState,
  "files": m006.files,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
