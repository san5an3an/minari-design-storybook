/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./drawer.root";
import * as m001 from "./drawer.left";
import * as m002 from "./drawer.right";
import * as m003 from "./drawer.top";
import * as m004 from "./drawer.bottom";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "drawer.root": m000.root,
  "drawer.left": m001.left,
  "drawer.right": m002.right,
  "drawer.top": m003.top,
  "drawer.bottom": m004.bottom,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
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
