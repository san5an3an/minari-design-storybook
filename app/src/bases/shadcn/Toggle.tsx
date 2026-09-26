import { Toggle as ShadcnToggle } from "@/components/ui/toggle";
import { cn } from "@/lib/utils";
import type { ToggleProps } from "../../systems/props";

const SIZE: Record<string, "sm" | "default" | "lg"> = {
  sm: "sm", md: "default", lg: "lg",
};

export function Toggle({
  variant = "default", size = "md", pressed, defaultPressed, onPressedChange,
  children, className, ...rest
}: ToggleProps) {
  return (
    <ShadcnToggle
      variant={variant === "outline" ? "outline" : "default"}
      size={SIZE[size] ?? "default"}
      pressed={pressed}
      defaultPressed={defaultPressed}
      onPressedChange={onPressedChange}
      // 모서리와 간격은 모든 크기에, 가로 여백은 기본 크기에만 지정. 토큰에 크기 구분이 없음
      className={cn(
        "gap-(--component-toggle-gap) rounded-(--component-toggle-radius)",
        (SIZE[size] ?? "default") === "default" && "px-(--component-toggle-padding-inline)",
        className,
      )}
      {...rest}
    >
      {children}
    </ShadcnToggle>
  );
}
