import * as React from "react";
import MuiAvatar from "@mui/material/Avatar";
import MuiAvatarGroup from "@mui/material/AvatarGroup";
import MuiBadge from "@mui/material/Badge";

export interface MuiAvatarProps {
  size?: string;
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
}

// 계약의 size 항목을 시스템 토큰으로 매핑. 값은 시스템이 결정
const SIZE = {
  sm: "var(--component-avatar-size-sm)",
  md: "var(--component-avatar-size-md)",
  lg: "var(--component-avatar-size-lg)",
} as const;

function AvatarRoot({ size = "md", src, alt, fallback, className, children }: MuiAvatarProps) {
  const d = SIZE[size as keyof typeof SIZE] ?? SIZE.md;
  // src 없음 또는 로드 실패 시 MUI가 children 렌더링. onError 미사용
  const avatar = (
    <MuiAvatar src={src || undefined} alt={alt} sx={{ width: d, height: d }}>
      {fallback}
    </MuiAvatar>
  );
  // 표시가 있으면 Badge로 감싸기, 자식 없으면 불필요한 요소 생성 생략하기
  return children ? (
    <MuiBadge
      className={className}
      overlap="circular"
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      variant="dot"
      color="success"
    >
      {avatar}
    </MuiBadge>
  ) : (
    <span className={className}>{avatar}</span>
  );
}

// 여러 항목 겹쳐 놓는 위치, AvatarGroup 사용
function Group({ children, className }: { children?: React.ReactNode; className?: string }) {
  // max를 크게 지정, 개수 제한하면 GroupCount 의미 사라질 수 있음
  return (
    <MuiAvatarGroup
      max={99}
      className={className}
      sx={{ "& .MuiAvatar-root": { marginLeft: "var(--component-avatar-stack-overlap)" } }}
    >
      {children}
    </MuiAvatarGroup>
  );
}

// 겹친 항목 뒤에 붙는 +N 표시
function GroupCount({ children, className }: { children?: React.ReactNode; className?: string }) {
  return (
    <MuiAvatar className={className} sx={{ width: SIZE.md, height: SIZE.md }}>
      {children}
    </MuiAvatar>
  );
}

function Badge {
  return null;
}

export const Avatar = Object.assign(AvatarRoot, { Group, GroupCount, Badge });
