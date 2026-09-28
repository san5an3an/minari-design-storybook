// @ts-nocheck
/* 원문(`../_src/pages/delete-one-click/app.tsx`)을 그대로 마운트하는 **얇은 배선**.
 *
 * ⚠️ 공식 `index.tsx` 가 하던 `createRoot(...).render(<App/>)` 를 React 트리 반환으로 바꾼
 *    것뿐이다 — `App` 자체·그 안 JSX(Cancel/Save changes 등)는 한 글자도 안 건드린다.
 *    원문이 `../../styles/base.scss` 를 부르는 것과 같은 이유로 여기서도 그 CSS 를 심는다
 *    (경로만 이 파일 위치 기준으로 다시 쓴 것 — `_src/styles/base.scss`, 내용은 그대로).
 * ⚠️ `apply-mode`·`adjust-body-padding` 은 공식 webpack.config.mjs 가 **모든 데모에 강제로
 *    무는 공용 엔트리**다(`tools/copy_cloudscape_demo_src.mjs` 머리 주석) — 부수효과 import 로
 *    그 순서를 그대로 재현한다.
 */
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
/* ⚠️ 2026-09-18 — `base.scss` import 는 잠깐 뺐다: `@use '~@cloudscape-design/design-tokens'`
 *    가 site 전체를 500 으로 내렸다(공유 dev 서버 — 실측·즉시 되돌림, 아래 상세는 조사 중).
 *    scss 없이도 컴포넌트 자체 스타일(hashed CSS custom properties)은 살아 있어 레이아웃이
 *    깨지지는 않는다 — `base.scss` 는 데모 페이지 전용 여백/폭 보정용이라 없으면 여백만 기본값. */
import { App } from "../_src/pages/delete-one-click/app";

export default function DeleteOneClickDemo() {
  return <App />;
}
