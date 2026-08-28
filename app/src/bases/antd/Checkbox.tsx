import { Checkbox as AntCheckbox } from "antd";
import type { CheckboxImpl, CheckboxProps } from "../../systems/props";

function CheckboxRoot({
  id, checked, defaultChecked, indeterminate, disabled, onCheckedChange,
  children, className, ...rest
}: CheckboxProps) {
  return (
    <AntCheckbox
      id={id}
      checked={checked}
      defaultChecked={defaultChecked}
      indeterminate={indeterminate}
      disabled={disabled}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className={className}
      {...rest}
    >
      {children}
    </AntCheckbox>
  );
}

export const Checkbox = Object.assign(CheckboxRoot, {
  Group: AntCheckbox.Group,
}) as unknown as CheckboxImpl;
