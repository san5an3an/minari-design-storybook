import { Alert as AntAlert } from "antd";
import type { AlertProps } from "../../systems/props";
import { ToastIcon, hasToastIcon } from "../ToastIcon";

const TYPE: Record<string, "success" | "info" | "warning" | "error"> = {
  success: "success",
  warning: "warning",
  danger: "error",
  brand: "info",
  neutral: "info",
};

export function Alert({
  tone = "neutral", title, icon, action, closable, children, className,
}: AlertProps) {
  // 표시는 종류가 있으면 기본으로 켜짐. 색만으로 구분 안 하기 위한 장치임
  const showIcon = (icon ?? true) && hasToastIcon(tone);

  return (
    <AntAlert
      className={className}
      type={TYPE[tone] ?? "info"}
      showIcon={showIcon}
      icon={showIcon ? <ToastIcon tone={tone} size="1em" /> : undefined}
      title={title}
      description={children}
      action={action}
      closable={closable}
    />
  );
}
