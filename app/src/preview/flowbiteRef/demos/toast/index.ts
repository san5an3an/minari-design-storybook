/* 자동 생성 — tools/gen_flowbite_demos.py. 손으로 고치지 말 것. */
import * as m000 from "./toast.root";
import * as m001 from "./toast.colors";
import * as m002 from "./toast.feedback";
import * as m003 from "./toast.withButton";
import * as m004 from "./toast.interactive";
import * as m005 from "./toast.customDismissal";

/** key(`<Example name>`) → 공식 export `CodeData` 그대로. 어댑터가 `.component` 를 가리킨다. */
export const DEMOS: Record<string, { component: unknown }> = {
  "toast.root": m000.root,
  "toast.colors": m001.colors,
  "toast.feedback": m002.feedback,
  "toast.withButton": m003.withButton,
  "toast.interactive": m004.interactive,
  "toast.customDismissal": m005.customDismissal,
};

/** 안 세운 것과 **그 까닭**. `codes` 는 걸린 코드 전부(선언 순서) · `code` 는 그 첫째. */
export const SKIPPED: Record<string, { code: string; codes: string[]; detail: string }> = {
};
