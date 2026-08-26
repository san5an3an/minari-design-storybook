import type { CSSProperties } from "react";
import { AspectRatio as ShadcnAspectRatio } from "@/components/ui/aspect-ratio";
import type { AspectratioProps } from "../../systems/props";

const NAMED: Record<string, number> = {
  square: 1,
  video: 16 / 9,
  portrait: 9 / 16,
};

// 미지원 환경 대비 반환값 함께 유지
const SURFACE: CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "var(--component-aspectratio-bg, var(--muted))",
  border: "var(--semantic-border-width-default, 0.0625rem) solid "
        + "var(--component-aspectratio-border, var(--border))",
  borderRadius: "var(--component-aspectratio-radius, var(--radius))",
  overflow: "hidden",
};

export function Aspectratio({ ratio = "video", children, style, ...rest }: AspectratioProps) {
  const n = typeof ratio === "number" ? ratio : (NAMED[ratio] ?? NAMED.video);
  return (
    <ShadcnAspectRatio ratio={n} {...rest}>
      <div style={{ ...SURFACE, ...style }}>{children}</div>
    </ShadcnAspectRatio>
  );
}
