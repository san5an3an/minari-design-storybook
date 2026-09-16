/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./badge.root";
import * as m001 from "./badge.asLink";
import * as m002 from "./badge.sizes";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "badge.root": m000.root,
  "badge.asLink": m001.asLink,
  "badge.sizes": m002.sizes,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
  "badge.withIcon": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
  "badge.withIconOnly": {"code": "package-missing", "codes": ["package-missing"], "detail": "미설치: react-icons"},
};
