import { Card, Switch as AntSwitch } from "antd";
import type { ReactNode } from "react";
import type { SwitchImpl, SwitchProps } from "../../systems/props";

function SwitchRoot({
  id, size, checked, defaultChecked, disabled, onCheckedChange, className, ...rest
}: SwitchProps) {
  return (
    <AntSwitch
      id={id}
      // 크기는 default, small 중 sm만 적용
      size={size === "sm" ? "small" : "default"}
      checked={checked}
      defaultChecked={defaultChecked}
      disabled={disabled}
      onChange={(v) => onCheckedChange?.(v)}
      className={className}
      aria-label={rest["aria-label"]}
    />
  );
}

function SwitchCard({
  title, description, className, ...rest
}: SwitchProps & { title?: ReactNode; description?: ReactNode }) {
  return (
    <Card className={className} variant="outlined" title={title} extra={<SwitchRoot {...rest} />}>
      {description}
    </Card>
  );
}

export const Switch = Object.assign(SwitchRoot, { Card: SwitchCard }) as unknown as SwitchImpl;
