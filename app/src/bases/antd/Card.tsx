import { Card as AntCard } from "antd";
import type { CardProps } from "../../systems/props";

export function Card({
  interactive, title, description, action, footer, children, className,
}: CardProps) {
  const hasHead = title !== undefined || action !== undefined;

  return (
    <AntCard
      className={className}
      variant="outlined"
      // 클릭 가능한 카드만 hover 반응. 비활성 카드 반응은 잘못된 신호임
      hoverable={interactive}
      title={hasHead ? title : undefined}
      extra={action}
    >
      {description}
      {children}
      {footer}
    </AntCard>
  );
}
