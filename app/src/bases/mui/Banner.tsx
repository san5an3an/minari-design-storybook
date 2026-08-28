import * as React from "react";
import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

export interface MuiBannerProps {
  soft?: boolean;
  title?: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

export function Banner({ soft, title, actions, className, children }: MuiBannerProps) {
  return (
    <MuiAlert
      className={className}
      // soft는 강조 정도 값. variant로 매핑, 색은 직접 지정하지 않음
      variant={soft ? "standard" : "filled"}
      severity="info"
      icon={false}
      action={actions}
    >
      {title ? <AlertTitle>{title}</AlertTitle> : null}
      {children}
    </MuiAlert>
  );
}
