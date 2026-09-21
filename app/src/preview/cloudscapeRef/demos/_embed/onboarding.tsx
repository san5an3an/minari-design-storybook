// @ts-nocheck
/* 원문(`../_src/pages/onboarding/{root,router,store}.tsx`)을 그대로 마운트하는 얇은 배선 —
 * 원문 `index.tsx` 가 짜던 `<StoreProvider><App><Router initialPage="..."/></App></StoreProvider>`
 * 트리를 한 글자도 안 고치고 그대로 옮겼다(`initialPage` 값도 원문 그대로). */
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
import { App } from "../_src/pages/onboarding/root";
import { Router } from "../_src/pages/onboarding/router";
import { StoreProvider } from "../_src/pages/onboarding/store";

export default function OnboardingDemo() {
  return (
    <StoreProvider>
      <App>
        <Router initialPage="create-transcription-job" />
      </App>
    </StoreProvider>
  );
}
