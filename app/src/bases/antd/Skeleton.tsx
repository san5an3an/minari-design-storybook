import { Skeleton as AntSkeleton } from "antd";
import type { SkeletonProps } from "../../systems/props";

export function Skeleton({ style, className }: SkeletonProps) {
  return <AntSkeleton.Node className={className} active style={style} />;
}
