import * as React from "react";
import Box from "@mui/material/Box";
import MuiPopover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";

type Side = "top" | "right" | "bottom" | "left";
type Align = "start" | "center" | "end";

export interface MuiPopoverProps {
  trigger?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  side?: Side;
  align?: Align;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  className?: string;
  children?: React.ReactNode;
}

const H = { start: "left", center: "center", end: "right" } as const;
const V = { start: "top", center: "center", end: "bottom" } as const;

// 계약의 side, align을 MUI 두 원점으로 매핑
function origins(side: Side, align: Align) {
  if (side === "top" || side === "bottom") {
    const anchorV = side === "top" ? "top" : "bottom";
    const transV = side === "top" ? "bottom" : "top";
    return {
      anchorOrigin: { vertical: anchorV, horizontal: H[align] } as const,
      transformOrigin: { vertical: transV, horizontal: H[align] } as const,
    };
  }
  const anchorH = side === "left" ? "left" : "right";
  const transH = side === "left" ? "right" : "left";
  return {
    anchorOrigin: { vertical: V[align], horizontal: anchorH } as const,
    transformOrigin: { vertical: V[align], horizontal: transH } as const,
  };
}

export function Popover({
  trigger, title, description, side = "bottom", align = "center",
  open, defaultOpen, onOpenChange, className, children,
}: MuiPopoverProps) {
  const ref = React.useRef<HTMLSpanElement | null>(null);
  const [own, setOwn] = React.useState(defaultOpen ?? false);
  const isOpen = open ?? own;
  const set = (v: boolean) => {
    if (open === undefined) setOwn(v);
    onOpenChange?.(v);
  };
  const o = origins(side, align);

  return (
    <>
      <Box component="span" ref={ref} onClick={ => set(!isOpen)} sx={{ display: "inline-flex" }}>
        {trigger}
      </Box>
      <MuiPopover
        className={className}
        open={isOpen}
        anchorEl={ref.current}
        onClose={ => set(false)}
        anchorOrigin={o.anchorOrigin}
        transformOrigin={o.transformOrigin}
      >
        <Box sx={{ display: "flex", flexDirection: "column", gap: "0.375rem", p: "0.75rem" }}>
          {title ? <Typography variant="subtitle2">{title}</Typography> : null}
          {description ? (
            <Typography variant="body2" color="text.secondary">{description}</Typography>
          ) : null}
          {children}
        </Box>
      </MuiPopover>
    </>
  );
}
