import { Tag } from "antd";
import type { BadgeProps } from "../../systems/props";

// neutral은 상태 아닌 표시라 색상 미지정. 기본값이 중립임
const COLOR: Record<string, string | undefined> = {
  neutral: undefined,
  brand: "processing",
  danger: "error",
  success: "success",
  warning: "warning",
};

export function Badge({
  tone = "neutral", icon, iconPosition = "inline-start", children, className,
}: BadgeProps) {
  const end = iconPosition === "inline-end";
  return (
    <Tag className={className} color={COLOR[tone]} icon={end ? undefined : icon}>
      {children}
      {/* 표시가 텍스트 뒤에 오는 경우, icon은 앞자리 전용이라 여기서만 뒤에 배치하기 */}
      {end ? icon : null}
    </Tag>
  );
}
