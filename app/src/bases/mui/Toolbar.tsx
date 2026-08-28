import * as React from "react";
import MuiToolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

export interface MuiToolbarProps {
  orientation?: "horizontal" | "vertical";
  className?: string;
  children?: React.ReactNode;
}

function ToolbarRoot({ orientation = "horizontal", className, children }: MuiToolbarProps) {
  return (
    <MuiToolbar
      className={className}
      variant="dense"
      // MUI Toolbar는 flexDirection만 전환. 세로 축 자체가 없음
      sx={{
        flexDirection: orientation === "vertical" ? "column" : "row",
        alignItems: "center",
        gap: "var(--component-toolbar-gap)",
        minHeight: "auto",
      }}
    >
      {children}
    </MuiToolbar>
  );
}

// 도구 사이에 끼는 글자
function Text({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <Typography className={className} variant="body2" component="span">
      {children}
    </Typography>
  );
}

// 그룹 구분선
function Separator({ className }: { className?: string }) {
  return <Divider className={className} orientation="vertical" flexItem />;
}

export const Toolbar = Object.assign(ToolbarRoot, { Text, Separator });
