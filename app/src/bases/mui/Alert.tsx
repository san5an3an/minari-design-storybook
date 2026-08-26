import MuiAlert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import type { AlertProps } from "../../systems/props";
import { ToastIcon, hasToastIcon } from "../ToastIcon";

export function Alert({
  tone = "neutral", title, icon, action, children, className,
}: AlertProps) {
  // 표시는 종류가 있으면 기본 노출. Toast와 동일한 체계로 색만으로 구분하지 않는 설계임
  const showIcon = (icon ?? true) && hasToastIcon(tone);
  return (
    <MuiAlert
      className={className}
      icon={showIcon ? <ToastIcon tone={tone} /> : false}
      action={action}
      sx={{
        background: `var(--component-alert-${tone}-bg)`,
        color: `var(--component-alert-${tone}-fg)`,
        borderColor: `var(--component-alert-${tone}-border)`,
        borderStyle: "solid",
        borderWidth: "var(--semantic-border-width-default)",
        borderRadius: "var(--component-alert-radius)",
        padding: "var(--component-alert-padding)",
        gap: "var(--component-alert-gap)",
        fontSize: "var(--component-alert-font-size)",
        // MUI 기본 padding 7px 제거. 안 지우면 gap 위 얹혀 종류별 높이 달라 보임
        "& .MuiAlert-icon": { padding: 0, marginRight: 0, color: "inherit", opacity: 1 },
        "& .MuiAlert-message": { padding: 0, minWidth: 0 },
        "& .MuiAlert-action": { padding: 0, marginRight: 0, alignItems: "center" },
      }}
    >
      {title !== undefined ? (
        <AlertTitle
          sx={{ fontSize: "var(--component-alert-title-font-size)", marginBottom: 0 }}
        >
          {title}
        </AlertTitle>
      ) : null}
      <span style={{ color: "var(--component-alert-description-fg)" }}>{children}</span>
    </MuiAlert>
  );
}
