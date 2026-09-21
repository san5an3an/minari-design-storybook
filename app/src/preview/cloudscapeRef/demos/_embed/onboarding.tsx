// @ts-nocheck
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
