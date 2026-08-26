import type { DemoSet } from "../types";
import D0 from "./00-temporary-drawer";
import D1 from "./01-anchor-temporary-drawer";
import D2 from "./02-swipeable-temporary-drawer";
import D3 from "./03-swipeable-edge-drawer";
import D4 from "./04-responsive-drawer";
import D5 from "./05-persistent-drawer-left";
import D6 from "./06-persistent-drawer-right";
import D7 from "./07-mini-drawer";
import D8 from "./08-permanent-drawer-left";
import D9 from "./09-permanent-drawer-right";
import D10 from "./10-clipped-drawer";

export const DEMOS: DemoSet = {
  "TemporaryDrawer": D0,
  "AnchorTemporaryDrawer": D1,
  "SwipeableTemporaryDrawer": D2,
  "SwipeableEdgeDrawer": D3,
  "ResponsiveDrawer": D4,
  "PersistentDrawerLeft": D5,
  "PersistentDrawerRight": D6,
  "MiniDrawer": D7,
  "PermanentDrawerLeft": D8,
  "PermanentDrawerRight": D9,
  "ClippedDrawer": D10,
};

export const SKIPPED: Record<string, string> = {
};
