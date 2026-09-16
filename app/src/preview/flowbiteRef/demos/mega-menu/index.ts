/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./megaMenu.root";
import * as m001 from "./megaMenu.icons";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "megaMenu.root": m000.root,
  "megaMenu.icons": m001.icons,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "megaMenu.fullWidth": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "megaMenu.fullWidthCTA": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "megaMenu.fullWidthImage": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
