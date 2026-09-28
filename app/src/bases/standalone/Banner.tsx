import { cx } from "../cx";
import type { BannerProps } from "../../systems/props";

export function Banner({ soft, title, actions, children, className }: BannerProps) {
  return (
    <div className={cx("ods-banner", soft && "ods-banner--soft", className)}>
      {title !== undefined && <h3 className="ods-banner-title">{title}</h3>}
      {children !== undefined && <p className="ods-banner-body">{children}</p>}
      {actions !== undefined && <div className="ods-banner-actions">{actions}</div>}
    </div>
  );
}
