// @ts-nocheck
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
