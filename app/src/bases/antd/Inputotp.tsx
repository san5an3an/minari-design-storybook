import { Input } from "antd";
import type { InputotpProps } from "../../systems/props";

export function Inputotp({
  length, value, defaultValue, onValueChange, disabled, className,
}: InputotpProps) {
  return (
    <Input.OTP
      className={className}
      length={length}
      value={value}
      defaultValue={defaultValue}
      disabled={disabled}
      onChange={(v: string) => onValueChange?.(v)}
    />
  );
}
