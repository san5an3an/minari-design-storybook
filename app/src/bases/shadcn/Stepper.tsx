import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import type { StepperProps } from "../../systems/props";

export function Stepper({
  value, min = 0, max = 99, onValueChange, ...rest
}: StepperProps) {
  const step = (next: number) =>  => onValueChange?.(Math.min(max, Math.max(min, next)));
  const btn = {
    color: "var(--component-stepper-btn-fg)",
    padding: "var(--component-stepper-btn-padding)",
  };

  return (
    <div
      className="inline-flex items-center"
      style={{
        background: "var(--component-stepper-bg)",
        border: "var(--semantic-border-width-default) solid var(--component-stepper-border)",
        borderRadius: "var(--component-stepper-radius)",
        color: "var(--component-stepper-fg)",
        fontSize: "var(--component-stepper-font-size)",
      }}
      {...rest}
    >
      <Button variant="ghost" size="icon" onClick={step(value - 1)} disabled={value <= min}
              aria-label="하나 줄이기" style={btn}>
        <Minus />
      </Button>
      {/* 숫자를 읽기 전용으로 표시 */}
      <output style={{ minWidth: "2.5em", textAlign: "center" }}>{value}</output>
      <Button variant="ghost" size="icon" onClick={step(value + 1)} disabled={value >= max}
              aria-label="하나 늘리기" style={btn}>
        <Plus />
      </Button>
    </div>
  );
}
