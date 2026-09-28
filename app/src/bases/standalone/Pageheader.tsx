import { cx } from "../cx";
import type { PageHeaderProps } from "../../systems/props";

export function Pageheader({ title, lede, meta, actions, children, className }: PageHeaderProps) {
  return (
    <header className={cx("ods-pageheader", className)}>
      <div className="ods-pageheader-main">
        <h1 className="ods-pageheader-title">{title}</h1>
        {lede !== undefined && <p className="ods-pageheader-lede">{lede}</p>}
        {meta !== undefined && <div className="ods-pageheader-meta">{meta}</div>}
        {children}
      </div>
      {actions !== undefined && <div className="ods-pageheader-actions">{actions}</div>}
    </header>
  );
}
