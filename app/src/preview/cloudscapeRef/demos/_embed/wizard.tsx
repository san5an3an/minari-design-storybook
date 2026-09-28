// @ts-nocheck
/* 원문(`../_src/pages/wizard/root.tsx`)을 그대로 마운트하는 **얇은 배선** — `table.tsx` 머리
 * 주석과 같은 방식. 이 페이지는 `wizard.scss` 를 쓴다(내부에서 `base.scss` 를 `@use` 하므로
 * 결국 같은 치환 혜택을 받는다, 원문 그대로). */
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
import "../_src/styles/wizard.scss";
/* ⚠️ wizard/root.tsx 만 `export default App` 이다(나머지 7개는 named export) — 실측. */
import App from "../_src/pages/wizard/root";

export default function WizardDemo() {
  return <App />;
}
