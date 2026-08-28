import { Input as AntInput } from "antd";
import type { InputProps } from "../../systems/props";

export function Input({
  id, multiline, placeholder, defaultValue, disabled, className, ...rest
}: InputProps) {
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  const common = {
    id,
    placeholder,
    defaultValue,
    disabled,
    className,
    status: invalid ? ("error" as const) : undefined,
  };
  return multiline ? <AntInput.TextArea {...common} /> : <AntInput {...common} />;
}
