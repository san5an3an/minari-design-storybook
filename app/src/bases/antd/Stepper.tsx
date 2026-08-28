import { InputNumber } from "antd";
import type { StepperProps } from "../../systems/props";

export function Stepper({ value, min, max, onValueChange, ...rest }: StepperProps) {
  return (
    <InputNumber
      aria-label={rest["aria-label"]}
      value={value}
      min={min}
      max={max}
      onChange={(v) => {
        if (typeof v === "number") onValueChange?.(v);
      }}
    />
  );
}
