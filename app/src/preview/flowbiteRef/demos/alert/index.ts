/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./alert.root";
import * as m001 from "./alert.dismissible";
import * as m002 from "./alert.rounded";
import * as m003 from "./alert.borderAccent";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "alert.root": m000.root,
  "alert.dismissible": m001.dismissible,
  "alert.rounded": m002.rounded,
  "alert.borderAccent": m003.borderAccent,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "alert.withIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "alert.additionalContent": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "alert.allOptions": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
