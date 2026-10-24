import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { withDims } from "./tone";
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
  // 기본 크기 칸의 가로 여백만 연결. 칸이 붙은 꼴(spacing=0)이라 gap 을 주면 벌어지고 높이는 shadcn 이 h-8 로 고정함
  // 크기 조건을 더해 명시도 0,3,0 으로 지정. shadcn 의 group-data-[spacing=0]/toggle-group:px-2(0,2,0)를 덮어야 함
  Item: withDims(
    ToggleGroupItem,
    "group-data-[spacing=0]/toggle-group:group-data-[size=default]/toggle-group:px-(--component-segmented-item-padding-inline)",
  ),
}) as SegmentedImpl;
