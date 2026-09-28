import { cx } from "../cx";
import type { ProseProps } from "../../systems/props";

export function Prose({ className, children }: ProseProps) {
  return <div className={cx("ods-prose", className)}>{children}</div>;
}
