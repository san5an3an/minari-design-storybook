import * as React from "react";
import MuiFormLabel from "@mui/material/FormLabel";
import Typography from "@mui/material/Typography";

export interface MuiLabelProps {
  required?: boolean;
  disabled?: boolean;
  hint?: React.ReactNode;
  "aria-invalid"?: boolean | "true" | "false";
  htmlFor?: string;
  className?: string;
  children?: React.ReactNode;
}

export function Label({
  required, disabled, hint, htmlFor, className, children,
  "aria-invalid": invalid,
}: MuiLabelProps) {
  return (
    <MuiFormLabel
      className={className}
      htmlFor={htmlFor}
      required={required}
      disabled={disabled}
      error={invalid === true || invalid === "true"}
      sx={{ display: "inline-flex", alignItems: "center", gap: "0.375rem" }}
    >
      {children}
      {/* 보조 안내 문구. 테마 caption 스타일 그대로 사용 */}
      {hint ? (
        <Typography variant="caption" color="text.secondary" component="span">
          {hint}
        </Typography>
      ) : null}
    </MuiFormLabel>
  );
}
