import { cx } from "../cx";
import type { SkeletonProps } from "../../systems/props";

export function Skeleton({ className, style, children }: SkeletonProps) {
  return (
    <span className={cx("ods-skeleton", className)} style={style}>
      {children}
    </span>
  );
}
