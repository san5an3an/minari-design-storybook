import { cx } from "../cx";
import type { ScrollareaProps } from "../../systems/props";

export function Scrollarea({
  orientation = "vertical",
  style,
  className,
  children,
}: ScrollareaProps) {
  return (
    <div
      className={cx("ods-scrollarea", `ods-scrollarea--${orientation}`, className)}
      style={style}
    >
      {children}
    </div>
  );
}
