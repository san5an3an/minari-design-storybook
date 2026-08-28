import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Kid = { children?: React.ReactNode; className?: string };

function EmptyRoot({ children, className }: Kid) {
  return (
    <Box
      className={className}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        gap: "var(--component-empty-gap)",
        paddingBlock: "var(--component-empty-padding-block)",
        paddingInline: "var(--component-empty-padding-inline)",
        maxWidth: "var(--component-empty-max-width)",
      }}
    >
      {children}
    </Box>
  );
}

// 표시와 제목을 묶는 위치
const Header = ({ children, className }: Kid) => (
  <Box className={className} sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "var(--component-empty-gap)" }}>
    {children}
  </Box>
);

// 아이콘, 이미지가 렌더링되는 위치
const Media = ({ children, className, variant }: Kid & { variant?: string }) => (
  <Box
    className={className}
    sx={{
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      width: "var(--component-empty-icon-size)",
      height: "var(--component-empty-icon-size)",
      color: "var(--component-empty-icon-fg)",
      // icon 변형만 테두리 상자 적용. 그림이 오면 상자가 오히려 방해임
      ...(variant === "icon"
        ? { border: 1, borderColor: "divider", borderRadius: 1, bgcolor: "action.hover" }
        : null),
    }}
  >
    {children}
  </Box>
);

const Title = ({ children, className }: Kid) => (
  <Typography className={className} variant="subtitle1">{children}</Typography>
);
const Description = ({ children, className }: Kid) => (
  <Typography className={className} variant="body2" color="text.secondary">{children}</Typography>
);
const Content = ({ children, className }: Kid) => (
  <Box className={className} sx={{ display: "flex", gap: "var(--component-empty-actions-gap)" }}>{children}</Box>
);

export const Empty = Object.assign(EmptyRoot, { Header, Media, Title, Description, Content });
