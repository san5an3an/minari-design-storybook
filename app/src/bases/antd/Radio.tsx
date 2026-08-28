import { Radio as AntRadio } from "antd";
import type { ReactNode } from "react";
import type { RadioImpl, RadioProps } from "../../systems/props";

function RadioRoot({ id, value, disabled, children, className, ...rest }: RadioProps) {
  return (
    <AntRadio id={id} value={value} disabled={disabled} className={className} {...rest}>
      {children}
    </AntRadio>
  );
}

function Group({
  value, defaultValue, onValueChange, children, className,
}: {
  value?: string; defaultValue?: string; onValueChange?: (v: string) => void;
  children?: ReactNode; className?: string;
}) {
  return (
    <AntRadio.Group
      className={className}
      value={value}
      defaultValue={defaultValue}
      onChange={(e) => onValueChange?.(e.target.value)}
    >
      {children}
    </AntRadio.Group>
  );
}

export const Radio = Object.assign(RadioRoot, { Group }) as unknown as RadioImpl;
