import * as React from "react";
import { App, message as staticMessage } from "antd";
import type { ToastImpl, ToastProps } from "../../systems/props";
import { ToastIcon, hasToastIcon } from "../ToastIcon";

type Api = ReturnType<typeof App.useApp>["message"];

// 훅 외부 호출 위해 인스턴스 보관. Region 전엔 비어 정적 API로 대체하는 방식임
let api: Api | null = null;

function Bridge {
  const { message } = App.useApp;
  React.useEffect( => { api = message; return  => { api = null; }; }, [message]);
  return null;
}

function Region {
  return (
    <App>
      <Bridge />
    </App>
  );
}

function show(opts: { title?: string; description?: string; type?: string }) {
  const tone = opts.type ?? "neutral";
  (api ?? staticMessage).open({
    content: opts.title ?? opts.description,
    icon: hasToastIcon(tone) ? <ToastIcon tone={tone} /> : undefined,
  });
}

function ToastRoot({ title, description, type }: ToastProps) {
  React.useEffect( => {
    show({ title: String(title ?? ""), description: String(description ?? ""), type });
  }, [title, description, type]);
  return null;
}

export const Toast = Object.assign(ToastRoot, { Region, show }) as unknown as ToastImpl;
