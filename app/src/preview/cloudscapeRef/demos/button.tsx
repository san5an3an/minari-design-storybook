// @ts-nocheck
/* 자동 생성 — tools/gen_cloudscape_demos.mjs. 손으로 고치지 말 것.
 *
 * ⚠️ 출처: cloudscape-design/demos@fbe25a13ca14c03f1065657e53d810139295490c:src/pages/delete-one-click/app.tsx:61-66
 *    감싸는 함수(`Demo_delete_one_click`)는 **우리가 짠 것**이다 — 원문 페이지는
 *    폼 상태(tags·loading·isValid)와 레이아웃(CustomAppLayout·Navigation)을 갖는 완결 앱이라
 *    그대로 못 세운다. label·variant 값은 원문과 한 글자도 다르지 않지만, 그 상태를 참조하던
 *    자리 둘은 값을 고정했다(원문 인용 — `gen_cloudscape_demos.mjs`의 `officialJsx`):
 *      · Cancel 의 `onClick={onCancel}` → `onClick={() => {}}`(정적 no-op)
 *      · Save changes 의 `disabled={loading || !isValid}` → `disabled={false}`(정적)
 *    ADR-022 D3(iframe) 의 컴포넌트 한정 예외 — decisions/ADR-022-notes/cloudscape.md 참고.
 */
import Button from "@cloudscape-design/components/button";
import SpaceBetween from "@cloudscape-design/components/space-between";

export default function Demo_delete_one_click() {
  return (
    <SpaceBetween direction="horizontal" size="xs">
    <Button variant="link" onClick={() => {}}>
      Cancel
    </Button>
    <Button variant="primary" disabled={false}>
      Save changes
    </Button>
    </SpaceBetween>
  );
}
