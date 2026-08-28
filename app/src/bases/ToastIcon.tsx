import { CircleAlert, CircleCheck, CircleX, Info, TriangleAlert } from "lucide-react";

const ICON = {
  success: CircleCheck,
  warning: TriangleAlert,
  danger: CircleX,
  info: Info,
  brand: CircleAlert,
} as const;

// 종류별 표시 여부 확인. ToastIcon 참거짓으로 판단 불가. JSX는 항상 참임
export function hasToastIcon(tone?: string): boolean {
  return tone !== undefined && tone in ICON;
}

// @param tone 종류, 미지정 렌더링 제외 @param size 위임용, 기본값 토큰
export function ToastIcon({ tone, size }: { tone?: string; size?: string }) {
  const Icon = ICON[tone as keyof typeof ICON];
  if (!Icon) return null;
  const box = size ?? "var(--component-toast-icon-size)";
  return (
    <Icon
      aria-hidden
      // 클래스와 인라인 함께 지정. 일부 라이브러리가 커스텀 CSS를 안 불러오는 제약임
      className="ods-toast-icon"
      style={{ width: box, height: box, flexShrink: 0 }}
    />
  );
}
