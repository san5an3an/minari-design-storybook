import { useState } from "react";
import { Check, CircleX, Info, Plus, TriangleAlert, X } from "lucide-react";
import { cx } from "../cx";
import type { AlertProps } from "../../systems/props";

const ICON: Record<string, React.ComponentType<{ "aria-hidden"?: boolean }>> = {
  neutral: Info, brand: Info, info: Info,
  success: Check, warning: TriangleAlert, danger: CircleX, accent: Plus,
};

export function Alert({
  tone = "neutral",
  title,
  icon = true,
  action,
  closable,
  children,
  className,
}: AlertProps) {
  const [open, setOpen] = useState(true);
  if (!open) return null;

  // 값은 폴백까지 매핑. 시스템마다 tone 목록이 달라 모르는 값이 실제로 있음
  const Icon = ICON[tone] ?? ICON.neutral;

  return (
    <div className={cx("ods-alert", `ods-alert--${tone}`, className)}>
      {icon && <Icon aria-hidden />}
      <div>
        {title !== undefined && <b className="ods-alert-title">{title}</b>}
        {title !== undefined
          ? <div className="ods-alert-description">{children}</div>
          : children}
      </div>
      {action !== undefined ? (
        <div className="ods-alert-action">{action}</div>
      ) : closable ? (
        <button
          type="button"
          className="ods-alert-action"
          // 닫기 대상을 텍스트로 명시. 없으면 목록에서 전부 같은 이름으로 보이는 문제 있음
          aria-label="알림 닫기"
          onClick={ => setOpen(false)}
        >
          <X aria-hidden />
        </button>
      ) : null}
    </div>
  );
}
