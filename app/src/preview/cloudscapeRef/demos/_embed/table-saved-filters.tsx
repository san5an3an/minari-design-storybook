// @ts-nocheck
/* 원문(`../_src/pages/table-saved-filters/root.tsx`)을 그대로 마운트하는 **얇은 배선** —
 * `table.tsx` 머리 주석과 같은 방식(scss `~` 접두사 치환 이력 동일). 이 페이지는 `base.scss` 가
 * 아니라 `table-select.scss` 를 쓴다(원문 그대로). */
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
import "../_src/styles/table-select.scss";
import { App } from "../_src/pages/table-saved-filters/root";

export default function TableSavedFiltersDemo() {
  return <App />;
}
