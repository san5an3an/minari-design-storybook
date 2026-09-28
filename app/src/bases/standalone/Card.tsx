import { cx } from "../cx";
import type { CardProps } from "../../systems/props";

export function Card({
  interactive,
  title,
  description,
  action,
  footer,
  children,
  className,
}: CardProps) {
  const head = (
    <>
      {title !== undefined && <h4 className="ods-card-title">{title}</h4>}
      {description !== undefined && <p className="ods-card-body">{description}</p>}
    </>
  );

  return (
    <div
      className={cx("ods-card", interactive && "ods-card--interactive", className)}
      tabIndex={interactive ? 0 : undefined}
    >
      {action === undefined ? (
        head
      ) : (
        // 값은 계약 토큰에서만 사용. 간격을 숫자로 고정하면 여백 기준이 시스템마다 달라질 수 있음
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "var(--component-card-gap)",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>{head}</div>
          {action}
        </div>
      )}
      {children !== undefined && <div className="ods-card-body">{children}</div>}
      {footer}
    </div>
  );
}
