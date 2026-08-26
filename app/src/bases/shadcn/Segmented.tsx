import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import type { SegmentedImpl, SegmentedProps } from "../../systems/props";

const SIZE: Record<string, "sm" | "default" | "lg"> = {
  sm: "sm", md: "default", lg: "lg",
};

function SegmentedRoot({
  variant = "outline", size = "md", orientation = "horizontal", children, ...rest
}: SegmentedProps) {
  return (
    <ToggleGroup
      variant={variant === "default" ? "default" : "outline"}
      size={SIZE[size] ?? "default"}
      spacing={0}
      orientation={orientation}
      {...rest}
    >
      {children}
    </ToggleGroup>
  );
}

export const Segmented = Object.assign(SegmentedRoot, {
  Item: ToggleGroupItem,
}) as SegmentedImpl;
