// @ts-nocheck
/* 원문(`../_src/pages/chat/index.tsx`)의 App 이 따로 export 되지 않아(다른 페이지들과 다름) 그
 * 본문을 그대로 옮겨 마운트한다 — 로직은 한 글자도 안 바꿨다, export 자리만 옮겼다.
 * 2026-09-19 — chat-components·code-view 설치 완료(리더 실측·설치)로 unblock. */
import "../_src/common/apply-mode";
import "../_src/common/adjust-body-padding";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import enMessages from "@cloudscape-design/components/i18n/messages/all.en.json";
import { CustomAppLayout, Notifications } from "../_src/pages/commons/common-components";
import Chat from "../_src/pages/chat/chat";

export default function ChatDemo() {
  return (
    <I18nProvider locale="en" messages={[enMessages]}>
      <CustomAppLayout
        maxContentWidth={1280}
        toolsHide
        navigationHide
        content={<Chat />}
        notifications={<Notifications />}
      />
    </I18nProvider>
  );
}
