import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export interface MuiInputgroupProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  multiline?: boolean;
  blockStart?: React.ReactNode;
  blockEnd?: React.ReactNode;
  className?: string;
  placeholder?: string;
}

function InputgroupRoot({
  prefix, suffix, multiline, blockStart, blockEnd, className, placeholder,
}: MuiInputgroupProps) {
  return (
    <Box className={className} sx={{ display: "flex", flexDirection: "column", gap: "0.25rem" }}>
      {/* 셀 위 가로 구분선, 앞뒤 장식과 달리 테두리 밖에 위치 */}
      {blockStart}
      <OutlinedInput
        placeholder={placeholder}
        multiline={multiline}
        minRows={multiline ? 3 : undefined}
        startAdornment={
          prefix ? <InputAdornment position="start">{prefix}</InputAdornment> : undefined
        }
        endAdornment={
          suffix ? <InputAdornment position="end">{suffix}</InputAdornment> : undefined
        }
      />
      {blockEnd}
    </Box>
  );
}

// 장식 영역 텍스트
const Text = ({ children, className }: { children?: React.ReactNode; className?: string }) => (
  <Typography className={className} variant="body2" color="text.secondary" component="span">
    {children}
  </Typography>
);

// 장식 영역 버튼
const GroupButton = ({
  children, className, onClick,
}: { children?: React.ReactNode; className?: string; onClick?:  => void }) => (
  <Button className={className} size="small" onClick={onClick}>
    {children}
  </Button>
);

export const Inputgroup = Object.assign(InputgroupRoot, { Text, Button: GroupButton });
