import * as m000 from "./drawer.root";
import * as m001 from "./drawer.left";
import * as m002 from "./drawer.right";
import * as m003 from "./drawer.top";
import * as m004 from "./drawer.bottom";

export const DEMOS: Record<string, { component: unknown }> = {
  "drawer.root": m000.root,
  "drawer.left": m001.left,
  "drawer.right": m002.right,
  "drawer.top": m003.top,
  "drawer.bottom": m004.bottom,
};

export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "drawer.navigation": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "drawer.contactForm": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "drawer.formElements": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "drawer.noBodyScrolling": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "drawer.bodyScrolling": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "drawer.backdrop": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "drawer.noBackdrop": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "drawer.swipeableEdge": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
