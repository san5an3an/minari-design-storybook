import { Toaster, toast } from "@/components/ui/toast";
import type { ToastImpl, ToastProps } from "../../systems/props";

function ToastRoot({ title, description, type, className }: ToastProps) {
  return (
    <div
      className={className}
      data-slot="toast"
      data-type={type}
      data-static=""
      style={{ position: "static", height: "auto", width: "auto", transform: "none" }}
    >
      <div data-slot="toast-content">
        <div style={{ display: "flex", flexDirection: "column", gap: ".25rem", minWidth: 0 }}>
          {title ? <div data-slot="toast-title">{title}</div> : null}
          {description ? <div data-slot="toast-description">{description}</div> : null}
        </div>
      </div>
    </div>
  );
}

// 알림 표시 위치, 화면당 한 번만 배치
function Region {
  return <Toaster />;
}

// 토스트 실제 표시, 매니저 직접 호출하기
function show(opts: {
  title?: string;
  description?: string;
  type?: string;
  actionProps?: { children?: React.ReactNode; onClick?:  => void };
}) {
  toast.add(opts as never);
}

export const Toast = Object.assign(ToastRoot, { Region, show }) as unknown as ToastImpl;
