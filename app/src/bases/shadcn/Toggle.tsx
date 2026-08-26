import { Toggle as ShadcnToggle } from "@/components/ui/toggle";
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
      className={className}
      {...rest}
    >
      {children}
    </ShadcnToggle>
  );
}
