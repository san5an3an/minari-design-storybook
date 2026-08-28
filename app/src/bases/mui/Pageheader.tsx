import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface MuiPageheaderProps {
  title: React.ReactNode;
  lede?: React.ReactNode;
  meta?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
}

export function Pageheader({ title, lede, meta, actions, className }: MuiPageheaderProps) {
  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "var(--component-pageheader-gap)",
        rowGap: "var(--component-pageheader-row-gap)",
        flexWrap: "wrap",
        paddingBlock: "var(--component-pageheader-padding-block)",
      }}
    >
      <Box sx={{ display: "flex", flexDirection: "column", gap: "var(--component-pageheader-gap)", minWidth: 0 }}>
        <Typography variant="h5" component="h1">{title}</Typography>
        {lede ? (
          <Typography variant="body1" color="text.secondary">{lede}</Typography>
        ) : null}
        {meta ? (
          <Box sx={{ display: "flex", gap: "var(--component-pageheader-meta-gap)", alignItems: "center" }}>
            {meta}
          </Box>
        ) : null}
      </Box>
      {/* 동작은 오른쪽 끝에 배치하되 줄바꿈되면 아래로 내려가 제목을 밀지 않음 */}
      {actions ? <Box sx={{ display: "flex", gap: "var(--component-pageheader-actions-gap)", flexShrink: 0 }}>{actions}</Box> : null}
    </Box>
  );
}
