import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

export interface MuiSheetProps {
  trigger?: React.ReactNode;
  side?: "top" | "right" | "bottom" | "left";
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export function Sheet({
  trigger, side = "right", title, description, footer,
  open, defaultOpen, onOpenChange, className, children,
}: MuiSheetProps) {
  const [own, setOwn] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? own;
  const set = (v: boolean) => {
    if (open === undefined) setOwn(v);
    onOpenChange?.(v);
  };

  return (
    <>
      {trigger ? (
        // 여는 요소를 Box component="span"으로 래핑. 태그 고정 시 마크업 강제되는 문제 있음
        <Box component="span" onClick={ => set(true)} sx={{ display: "inline-flex" }}>
          {trigger}
        </Box>
      ) : null}
      <MuiDrawer className={className} anchor={side} open={isOpen} onClose={ => set(false)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem", p: "1rem" }}>
          {title ? <Typography variant="h6" component="h2">{title}</Typography> : null}
          {description ? (
            <Typography variant="body2" color="text.secondary">{description}</Typography>
          ) : null}
          {children}
          {footer ? <Box sx={{ mt: "auto" }}>{footer}</Box> : null}
        </Box>
      </MuiDrawer>
    </>
  );
}
