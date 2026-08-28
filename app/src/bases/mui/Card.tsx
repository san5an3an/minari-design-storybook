import MuiCard from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import type { CardProps } from "../../systems/props";

export function Card({
  interactive, title, description, action, footer, children, className,
}: CardProps) {
  const hasHead = title !== undefined || description !== undefined || action !== undefined;
  return (
    <MuiCard
      className={className}
      elevation={0}
      sx={{
        background: "var(--component-card-bg)",
        color: "var(--component-card-body-fg)",
        border: "var(--semantic-border-width-default) solid var(--component-card-border)",
        borderRadius: "var(--component-card-radius)",
        boxShadow: "var(--component-card-shadow)",
        // 클릭 가능한 카드만 hover 반응. 비활성 카드 반응은 잘못된 신호임
        ...(interactive
          ? {
              cursor: "pointer",
              "&:hover": {
                background: "var(--component-card-bg-hover)",
                borderColor: "var(--component-card-border-strong)",
              },
            }
          : null),
        // 여백은 CardContent CardActions 등 하위 요소별 지정
        "& .MuiCardHeader-root, & .MuiCardContent-root, & .MuiCardActions-root": {
          padding: "var(--component-card-padding)",
        },
        // CardContent 마지막 여백 1배 유지, 1.5배 토큰 없음
        "& .MuiCardContent-root:last-child": {
          paddingBottom: "var(--component-card-padding)",
        },
      }}
    >
      {hasHead ? (
        <CardHeader
          title={title}
          subheader={description}
          action={action}
          // disableTypography 금지. title/subheader 미렌더로 DOM에 없음
          slotProps={{
            content: { style: { minWidth: 0 } },
            action: { style: { margin: 0, alignSelf: "center" } },
            title: {
              sx: {
                color: "var(--component-card-title-fg)",
                fontSize: "var(--component-card-title-font-size)",
                letterSpacing: "var(--component-card-title-letter-spacing)",
                fontWeight: "var(--base-font-weight-semibold)",
              },
            },
            // description 전용 토큰이 없어 body-* 재사용, 신규 토큰 추가는 범위 밖임
            subheader: {
              sx: {
                color: "var(--component-card-body-fg)",
                fontSize: "var(--component-card-body-font-size)",
                letterSpacing: "var(--component-card-body-letter-spacing)",
              },
            },
          }}
          sx={{ alignItems: "center", gap: "var(--component-card-gap)" }}
        />
      ) : null}
      {children === undefined ? null : (
        <CardContent
          sx={{
            fontSize: "var(--component-card-body-font-size)",
            letterSpacing: "var(--component-card-body-letter-spacing)",
          }}
        >
          {children}
        </CardContent>
      )}
      {/* 버튼 간격 disableSpacing 기본값으로 8px 적용 */}
      {footer === undefined ? null : (
        <CardActions
          sx={{
            "& > :not(style) ~ :not(style)": { marginLeft: "var(--component-card-gap)" },
          }}
        >
          {footer}
        </CardActions>
      )}
    </MuiCard>
  );
}
