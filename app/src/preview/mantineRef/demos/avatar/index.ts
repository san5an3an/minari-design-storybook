import * as m000 from "../_src/demos/core/Avatar/Avatar.demo.usage";
import * as m001 from "../_src/demos/core/Avatar/Avatar.demo.initials";
import * as m002 from "../_src/demos/core/Avatar/Avatar.demo.allowedColors";
import * as m003 from "../_src/demos/core/Avatar/Avatar.demo.placeholders";
import * as m004 from "../_src/demos/core/Avatar/Avatar.demo.configurator";
import * as m005 from "../_src/demos/core/Avatar/Avatar.demo.group";
import * as m006 from "../_src/demos/core/Avatar/Avatar.demo.groupTooltip";
import * as m007 from "../_src/demos/core/Avatar/Avatar.demo.link";
import * as m008 from "../_src/demos/core/Avatar/Avatar.demo.groupTooltip";

export const DEMOS: Record<string, { component: unknown }> = {
  "usage": m000.usage,
  "initials": m001.initials,
  "allowedColors": m002.allowedColors,
  "placeholders": m003.placeholders,
  "configurator": m004.configurator,
  "group": m005.group,
  "groupTooltip": m006.groupTooltip,
  "link": m007.link,
  "AvatarDemos_groupTooltip": m008.groupTooltip,
};

export const SKIPPED: Record<string, { code: string; detail: string }> = {
};
