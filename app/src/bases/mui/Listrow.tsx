import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MuiList from "@mui/material/List";
import Box from "@mui/material/Box";

export interface MuiListrowProps {
  interactive?: boolean;
  lead?: React.ReactNode;
  title: React.ReactNode;
  sub?: React.ReactNode;
  trail?: React.ReactNode;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

function ListrowRoot({
  interactive, lead, title, sub, trail, header, footer, className,
}: MuiListrowProps) {
  const body = (
    <>
      {lead ? <Box sx={{ mr: "var(--component-listrow-gap)", display: "flex", flexShrink: 0 }}>{lead}</Box> : null}
      <ListItemText
        primary={title}
        secondary={sub}
        // disableTypography 생략. 텍스트가 아니어도 MUI가 행간을 맞춰줄 수 있음
      />
      {trail ? <Box sx={{ ml: "var(--component-listrow-gap)", display: "flex", flexShrink: 0 }}>{trail}</Box> : null}
    </>
  );

  return (
    <Box className={className}>
      {header}
      <ListItem disablePadding={interactive} sx={{
        px: interactive ? 0 : "var(--component-listrow-padding-inline)",
        py: interactive ? 0 : "var(--component-listrow-padding-block)",
      }}>
        {interactive ? (
          <ListItemButton sx={{
            px: "var(--component-listrow-padding-inline)",
            py: "var(--component-listrow-padding-block)",
          }}>{body}</ListItemButton>
        ) : (
          body
        )}
      </ListItem>
      {footer}
    </Box>
  );
}

// 줄들을 담는 위치
function List({ children, className }: { children?: React.ReactNode; className?: string }) {
  return <MuiList className={className} disablePadding>{children}</MuiList>;
}

export const Listrow = Object.assign(ListrowRoot, { List });
