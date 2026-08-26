import MuiSkeleton from "@mui/material/Skeleton";
import type { SkeletonProps } from "../../systems/props";

export function Skeleton({ className, style }: SkeletonProps) {
  return (
    <MuiSkeleton
      variant="rectangular"
      className={className}
      sx={{
        borderRadius: "var(--component-skeleton-radius)",
        background: "var(--component-skeleton-bg)",
        ...style,
      }}
    />
  );
}
