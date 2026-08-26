import { Skeleton as ShadcnSkeleton } from "@/components/ui/skeleton";
import type { SkeletonProps } from "../../systems/props";

export function Skeleton(props: SkeletonProps) {
  return <ShadcnSkeleton {...props} />;
}
