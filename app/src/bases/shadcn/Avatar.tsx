import {
  Avatar as ShadcnAvatar, AvatarBadge, AvatarFallback, AvatarGroup,
  AvatarGroupCount, AvatarImage,
} from "@/components/ui/avatar";
import { cn } from "@/lib/utils";
import type { AvatarImpl, AvatarProps } from "../../systems/props";
import { withDims } from "./tone";

// 모서리는 avatar-radius 토큰으로 지정. 원형 대신 시스템 모서리를 따르기로 정했음
// 겉(테두리를 그리는 ::after 포함), 사진, 대체 글자, 남은 인원 표시에 같은 모서리 지정. 하나라도 다르면 모서리가 어긋남
// 상태 점(AvatarBadge)은 원형 유지. 모서리를 따르는 틀이 아니라 표식임
const R = "rounded-(--component-avatar-radius) after:rounded-(--component-avatar-radius)";

const SIZE: Record<string, "sm" | "default" | "lg"> = {
  sm: "sm", md: "default", lg: "lg",
};

function AvatarRoot({ size = "md", src, alt, fallback, children, ...rest }: AvatarProps) {
  return (
    <ShadcnAvatar size={SIZE[size] ?? "default"} {...rest} className={cn(R, (rest as { className?: string }).className)}>
      {src ? <AvatarImage src={src} alt={alt} className="rounded-(--component-avatar-radius)" /> : null}
      {fallback ? <AvatarFallback className="rounded-(--component-avatar-radius)">{fallback}</AvatarFallback> : null}
      {children}
    </ShadcnAvatar>
  );
}

export const Avatar = Object.assign(AvatarRoot, {
  Group: AvatarGroup,
  GroupCount: withDims(AvatarGroupCount, "rounded-(--component-avatar-radius)"),
  Badge: AvatarBadge,
}) as AvatarImpl;
