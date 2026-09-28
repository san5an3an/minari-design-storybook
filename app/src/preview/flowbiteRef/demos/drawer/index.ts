/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
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

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
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

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
