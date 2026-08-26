import { Label as ShadcnLabel } from "@/components/ui/label";
import { cx } from "../cx";
import type { LabelProps } from "../../systems/props";

export function Label({
  required, disabled, hint, children, className, ...rest
}: LabelProps) {
  const invalid = rest["aria-invalid"] === true || rest["aria-invalid"] === "true";
  return (
    <ShadcnLabel
      className={cx(required && "ods-label--required", className)}
      data-disabled={disabled ? "true" : undefined}
      {...rest}
    >
      {children}
      {required ? <span className="sr-only">(필수)</span> : null}
      {hint === undefined ? null : <span className="ods-label-hint">{hint}</span>}
      {invalid ? <span className="sr-only">(오류)</span> : null}
    </ShadcnLabel>
  );
}
