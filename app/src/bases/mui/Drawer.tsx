import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";

export interface MuiDrawerProps {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  footer?: React.ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

export function Drawer({
  trigger, title, description, footer,
  open, defaultOpen, onOpenChange, className, children,
}: MuiDrawerProps) {
  const [own, setOwn] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? own;
  const set = (v: boolean) => {
    if (open === undefined) setOwn(v);
    onOpenChange?.(v);
  };

  return (
    <>
      {trigger ? (
        <Box component="span" onClick={ => set(true)} sx={{ display: "inline-flex" }}>
          {trigger}
        </Box>
      ) : null}
      <MuiDrawer className={className} anchor="bottom" open={isOpen} onClose={ => set(false)}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.75rem", p: "1rem" }}>
          {title ? <Typography variant="h6" component="h2">{title}</Typography> : null}
          {description ? (
            <Typography variant="body2" color="text.secondary">{description}</Typography>
          ) : null}
          {children}
          {footer ? <Box>{footer}</Box> : null}
        </Box>
      </MuiDrawer>
    </>
  );
}
