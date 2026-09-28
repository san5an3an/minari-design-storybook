// @ts-nocheck
/* storybook 의 문서용 함수 스텁 — carbon 판 `DOC_ONLY_PKGS` 와 같은 자리(2026-09-21).
 * 공식 스토리가 `action('onDismiss')` 로 **패널에 이벤트를 찍는다.** 화면에 그려지는 것이
 * 아니므로 빈 함수로 둬도 예제의 생김새가 안 바뀐다 — 그래서 이것은 거짓이 아니다.
 * ⛔ 값을 지어내지 않는다: 아무것도 하지 않고 아무것도 돌려주지 않는다. */
export const action = () => () => {};
export default { action };
