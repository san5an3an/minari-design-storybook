import {
  Alert as ShadcnAlert, AlertAction, AlertDescription, AlertTitle,
} from "@/components/ui/alert";
import type { AlertProps } from "../../systems/props";
import { ToastIcon, hasToastIcon } from "../ToastIcon";

export function Alert({
  tone = "neutral", title, icon, action, children, className,
}: AlertProps) {
  // 표시는 종류가 있으면 기본 노출. Toast와 동일한 체계로 색만으로 구분하지 않는 설계임
  const showIcon = (icon ?? true) && hasToastIcon(tone);
  return (
    <ShadcnAlert
      className={className}
      style={{
        background: `var(--component-alert-${tone}-bg)`,
        color: `var(--component-alert-${tone}-fg)`,
        borderColor: `var(--component-alert-${tone}-border)`,
        borderWidth: "var(--semantic-border-width-default)",
        borderRadius: "var(--component-alert-radius)",
        padding: "var(--component-alert-padding)",
        gap: "var(--component-alert-gap)",
        fontSize: "var(--component-alert-font-size)",
      }}
    >
      {showIcon ? <ToastIcon tone={tone} /> : null}
      {title !== undefined ? (
        <AlertTitle style={{ fontSize: "var(--component-alert-title-font-size)" }}>
          {title}
        </AlertTitle>
      ) : null}
      <AlertDescription style={{ color: "var(--component-alert-description-fg)" }}>
        {children}
      </AlertDescription>
      {/* 동작은 AlertAction이 담당. span에 밑줄을 그리면 절대 배치와 여백이 함께 사라질 수 있음 */}
      {action === undefined ? null : <AlertAction>{action}</AlertAction>}
    </ShadcnAlert>
  );
}
