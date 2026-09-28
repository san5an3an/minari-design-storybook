// @ts-nocheck
/* 원문(`../_src/pages/form/app.tsx`)을 그대로 마운트하는 얇은 배선 —
 * `delete-one-click.tsx` 머리 주석과 같은 방식.
 * ⚠️ 2026-09-19 — 예전엔 `internal/components/dropdown-status`(비공개 API) 를 부르는
 *    `use-content-origins.tsx` 때문에 못 세웠는데, 그건 죽은 옛 사본이었다(같은 이름의
 *    `.ts` 짝이 공개 API 로 진짜 쓰인다 — `copy_cloudscape_demo_src.mjs` STALE_TSX_TWIN
 *    참고). 그 사본을 복사에서 빼서 이제 선다. */
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
import { App } from "../_src/pages/form/app";

export default function FormDemo() {
  return <App />;
}
