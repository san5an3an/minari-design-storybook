import * as React from "react";
import MuiAlert, { type AlertProps as MuiAlertProps } from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Collapse from "@mui/material/Collapse";
import type { AlertProps } from "../../systems/props";
import { ToneIcon, hasToneIcon } from "./_icons";

// tone 값을 MUI severity 4종 중 최근접 값으로 변환
const SEVERITY: Record<string, MuiAlertProps["severity"]> = {
  success: "success",
  warning: "warning",
  danger: "error",
  info: "info",
  // 아래 둘은 MUI에 없어 info로 대체. 완전히 동일한 의미가 아닌 근사치임
  neutral: "info",
  brand: "info",
};

export function Alert({
  tone = "neutral", title, icon, action, closable, children, className,
}: AlertProps) {
  // 표시는 종류가 있으면 켜짐. 색과 함께 종류별 모양 변경 적용
  const showIcon = (icon ?? true) && hasToneIcon(tone);

  // 닫힘 상태는 직접 관리. MUI onClose 는 버튼만 그리고 사라지지 않음
  const [open, setOpen] = React.useState(true);

  const alert = (
    <MuiAlert
      className={className}
      // 구성 축인 두 줄
      severity={SEVERITY[tone] ?? "info"}
      // Alert 기본값은 아이콘 있고 제목 없는 standard 스타일
      variant="standard"
      // icon={false}면 iconMapping 도달 못 함. 아이콘 끌 때 사용
      icon={showIcon ? <ToneIcon tone={tone} fontSize="inherit" /> : false}
      action={action}
      // 닫기 버튼은 라이브러리가 렌더링. 아이콘 직접 삽입은 제외
      onClose={closable ?  => setOpen(false) : undefined}
      sx={{
        // 색, 모서리, 글자 토큰
        background: `var(--component-alert-${tone}-bg)`,
        color: `var(--component-alert-${tone}-fg)`,
        borderRadius: "var(--component-alert-radius)",
        fontSize: "var(--component-alert-font-size)",
        // 테두리는 tone과 무관하게 항상 있음. role 5종 기준으로 지정
        borderStyle: "solid",
        borderWidth: "var(--semantic-border-width-default)",
        borderColor: `var(--component-alert-${tone}-border)`,

        paddingInline: "var(--component-alert-padding)",
        "& .MuiAlert-icon": {
          marginRight: "var(--component-alert-gap)",
          color: "inherit",
          // 공식은 표시 투명도 0.9로 낮춰 본문 강조 처리
          opacity: 0.9,
        },
        "& .MuiAlert-message": {
          minWidth: 0,
          color: "var(--component-alert-description-fg)",
        },
        "& .MuiAlert-action": { alignItems: "center" },
      }}
    >
      {title !== undefined ? (
        <AlertTitle sx={{ fontSize: "var(--component-alert-title-font-size)", color: `var(--component-alert-${tone}-fg)` }}>
          {title}
        </AlertTitle>
      ) : null}
      {children}
    </MuiAlert>
  );

  // 닫히는 항목만 Collapse 로 감쌈. 전체를 감싸면 DOM 구조에 문제 있음
  return closable ? <Collapse in={open}>{alert}</Collapse> : alert;
}
