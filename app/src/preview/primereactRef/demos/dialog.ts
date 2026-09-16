// @ts-nocheck
import d0 from "./dialog/basic";
import d1 from "./dialog/position";
import d2 from "./dialog/maximizable";
import d3 from "./dialog/longcontent";
import d4 from "./dialog/modal";
import d5 from "./dialog/responsive";
import d6 from "./dialog/footer";
export const demos = {
  "basic": d0,
  "position": d1,
  "maximizable": d2,
  "longcontent": d3,
  "modal": d4,
  "responsive": d5,
  "footer": d6,
};
export const skipped = {
  "template": {"code":"local-module-missing","detail":"문서 사이트 내부 별칭 @/ — 공식 저장소 밖"},
  "headless": {"code":"other","detail":"공식 코드 문자열이 선언하지 않은 이름을 부른다 — InputText (import 줄 누락 · 본문 불변이라 고치지 않음)"},
};
