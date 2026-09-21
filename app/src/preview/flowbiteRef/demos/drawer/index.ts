import * as m000 from "./drawer.root";
import * as m001 from "./drawer.navigation";
import * as m002 from "./drawer.contactForm";
import * as m003 from "./drawer.formElements";
import * as m004 from "./drawer.left";
import * as m005 from "./drawer.right";
import * as m006 from "./drawer.top";
import * as m007 from "./drawer.bottom";
import * as m008 from "./drawer.noBodyScrolling";
import * as m009 from "./drawer.bodyScrolling";
import * as m010 from "./drawer.backdrop";
import * as m011 from "./drawer.noBackdrop";
import * as m012 from "./drawer.swipeableEdge";

export const DEMOS: Record<string, { component: unknown }> = {
  "drawer.root": m000.root,
  "drawer.navigation": m001.navigation,
  "drawer.contactForm": m002.contactForm,
  "drawer.formElements": m003.formElements,
  "drawer.left": m004.left,
  "drawer.right": m005.right,
  "drawer.top": m006.top,
  "drawer.bottom": m007.bottom,
  "drawer.noBodyScrolling": m008.noBodyScrolling,
  "drawer.bodyScrolling": m009.bodyScrolling,
  "drawer.backdrop": m010.backdrop,
  "drawer.noBackdrop": m011.noBackdrop,
  "drawer.swipeableEdge": m012.swipeableEdge,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
