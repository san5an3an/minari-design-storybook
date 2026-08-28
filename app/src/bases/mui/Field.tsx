import * as React from "react";
import Box from "@mui/material/Box";
import MuiFormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

type Kid = { children?: React.ReactNode; className?: string };

export interface MuiFieldProps {
  orientation?: "vertical" | "horizontal" | "responsive";
  label?: React.ReactNode;
  htmlFor?: string;
  description?: React.ReactNode;
  error?: React.ReactNode;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}

function FieldRoot({
  orientation = "vertical", label, htmlFor, description, error, disabled,
  className, children,
}: MuiFieldProps) {
  const row = orientation === "horizontal";
  return (
    <MuiFormControl
      className={className}
      disabled={disabled}
      error={Boolean(error)}
      sx={{
        display: "flex",
        flexDirection: row ? "row" : "column",
        alignItems: row ? "center" : "stretch",
        gap: "var(--component-field-gap)",
      }}
    >
      {label ? <FormLabel htmlFor={htmlFor}>{label}</FormLabel> : null}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "0.25rem", flex: row ? 1 : undefined }}>
        {children}
        {/* 오류 있으면 오류만 표시, 없으면 도움말 표시 */}
        {error ? (
          <FormHelperText error>{error}</FormHelperText>
        ) : description ? (
          <FormHelperText>{description}</FormHelperText>
        ) : null}
      </Box>
    </MuiFormControl>
  );
}

// 여러 필드를 한 행으로 그룹화하는 위치
const Group = ({ children, className }: Kid) => (
  <Box className={className} sx={{ display: "flex", gap: "var(--component-field-group-gap)", alignItems: "flex-end" }}>
    {children}
  </Box>
);
// 의미 같은 항목 fieldset 그룹화 위치
const Set = ({ children, className }: Kid) => (
  <Box component="fieldset" className={className} sx={{ border: 0, m: 0, p: 0 }}>
    {children}
  </Box>
);
// 그룹 구분선
const Separator = ({ className }: Kid) => <Divider className={className} />;
// 입력 필드 위치
const Content = ({ children, className }: Kid) => (
  <Box className={className} sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
    {children}
  </Box>
);
// 그룹 제목
const Title = ({ children, className }: Kid) => (
  <Typography className={className} variant="subtitle2" component="legend">
    {children}
  </Typography>
);
// 라벨
const Label = ({ children, className }: Kid) => (
  <FormLabel className={className}>{children}</FormLabel>
);
// 도움말
const Description = ({ children, className }: Kid) => (
  <FormHelperText className={className}>{children}</FormHelperText>
);
// 오류 문구
const Error = ({ children, className }: Kid) => (
  <FormHelperText className={className} error>{children}</FormHelperText>
);

export const Field = Object.assign(FieldRoot, {
  Group, Set, Separator, Content, Title, Label, Description, Error,
});
