import * as React from "react";
import MuiNativeSelect from "@mui/material/NativeSelect";

export interface MuiNativeselectProps {
  id?: string;
  name?: string;
  defaultValue?: string;
  value?: string;
  disabled?: boolean;
  "aria-invalid"?: boolean | "true" | "false";
  "aria-label"?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  className?: string;
  children?: React.ReactNode;
}

function NativeselectRoot({
  id, name, defaultValue, value, disabled, onChange, className, children,
  "aria-invalid": invalid, "aria-label": ariaLabel,
}: MuiNativeselectProps) {
  return (
    <MuiNativeSelect
      className={className}
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      disabled={disabled}
      error={invalid === true || invalid === "true"}
      onChange={onChange as React.ChangeEventHandler<HTMLSelectElement>}
      inputProps={{ "aria-label": ariaLabel, "aria-invalid": invalid }}
    >
      {children}
    </MuiNativeSelect>
  );
}

// 선택 항목, 브라우저 기본 option 구조
const Option = (p: React.OptionHTMLAttributes<HTMLOptionElement>) => <option {...p} />;
// 옵션 그룹 목록, 브라우저 기본 optgroup 구조
const OptGroup = (p: React.OptgroupHTMLAttributes<HTMLOptGroupElement>) => <optgroup {...p} />;

export const Nativeselect = Object.assign(NativeselectRoot, { Option, OptGroup });
