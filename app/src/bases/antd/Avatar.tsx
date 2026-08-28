import type { ReactNode } from "react";
import { Avatar as AntAvatar, Badge as AntBadge } from "antd";
import type { AvatarImpl, AvatarProps } from "../../systems/props";

function AvatarRoot({ size, src, alt, fallback, children, className }: AvatarProps) {
  return (
    <AntAvatar
      className={className}
      src={src}
      alt={alt}
      size={size as "small" | "large" | "default" | undefined}
    >
      {/* 이미지 없으면 라이브러리가 이 자식을 자동 렌더링. 별도 조건 없음 */}
      {fallback ?? children}
    </AntAvatar>
  );
}

function GroupCount({ children, className }: { children?: ReactNode; className?: string }) {
  return <AntAvatar className={className}>{children}</AntAvatar>;
}

function GroupBadge({ children, className }: { children?: ReactNode; className?: string }) {
  // 부착 위치, 크기, 테두리는 Badge 컴포넌트가 관리. 감싸는 대상은 아바타
  return (
    <AntBadge className={className} dot status="success">
      {children}
    </AntBadge>
  );
}

export const Avatar = Object.assign(AvatarRoot, {
  Group: AntAvatar.Group,
  GroupCount,
  Badge: GroupBadge,
}) as unknown as AvatarImpl;
