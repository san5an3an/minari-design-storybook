import {
  Avatar as ShadcnAvatar, AvatarBadge, AvatarFallback, AvatarGroup,
  AvatarGroupCount, AvatarImage,
} from "@/components/ui/avatar";
import type { AvatarImpl, AvatarProps } from "../../systems/props";

const SIZE: Record<string, "sm" | "default" | "lg"> = {
  sm: "sm", md: "default", lg: "lg",
};

function AvatarRoot({ size = "md", src, alt, fallback, children, ...rest }: AvatarProps) {
  return (
    <ShadcnAvatar size={SIZE[size] ?? "default"} {...rest}>
      {src ? <AvatarImage src={src} alt={alt} /> : null}
      {fallback ? <AvatarFallback>{fallback}</AvatarFallback> : null}
      {children}
    </ShadcnAvatar>
  );
}

export const Avatar = Object.assign(AvatarRoot, {
  Group: AvatarGroup,
  GroupCount: AvatarGroupCount,
  Badge: AvatarBadge,
}) as AvatarImpl;
