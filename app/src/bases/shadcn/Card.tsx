import { cn } from "@/lib/utils";
import {
  Card as ShadcnCard, CardAction, CardContent, CardDescription, CardFooter,
  CardHeader, CardTitle,
} from "@/components/ui/card";
import type { CardProps } from "../../systems/props";

export function Card({
  interactive, title, description, action, footer, children, className, ...rest
}: CardProps) {
  return (
    <ShadcnCard
      className={cn(
        "border transition-colors",
        interactive &&
          // 클릭 가능함을 커서로만 표시 안 함, hover 배경과 focus-visible 링도 사용
          "cursor-pointer hover:bg-[var(--component-card-bg-hover)] " +
            "focus-visible:outline-2 focus-visible:outline-offset-2 " +
            "focus-visible:outline-[var(--semantic-border-focus-default)]",
        className,
      )}
      // 클릭 가능한 카드는 button 인식 필요. tabIndex만으론 스크린리더에 덩어리로 남음
      role={interactive ? "button" : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              // role="button" 지정 시 Enter, Space 키 지원 필수임
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault;
                e.currentTarget.click;
              }
            }
          : undefined
      }
      style={{
        background: "var(--component-card-bg)",
        borderColor: "var(--component-card-border)",
        borderWidth: "var(--semantic-border-width-default)",
        borderRadius: "var(--component-card-radius)",
        boxShadow: "var(--component-card-shadow)",
        padding: "var(--component-card-padding)",
        gap: "var(--component-card-gap)",
      }}
      {...rest}
    >
      {/* 머리에 제목, 설명, 동작 함께 표시 */}
      {title !== undefined || description !== undefined || action !== undefined ? (
        <CardHeader className="p-0 border-b-0">
          {title !== undefined ? (
            <CardTitle
              style={{
                color: "var(--component-card-title-fg)",
                fontSize: "var(--component-card-title-font-size)",
              }}
            >
              {title}
            </CardTitle>
          ) : null}
          {description !== undefined ? (
            <CardDescription style={{ color: "var(--component-card-body-fg)" }}>
              {description}
            </CardDescription>
          ) : null}
          {action !== undefined ? <CardAction>{action}</CardAction> : null}
        </CardHeader>
      ) : null}
      <CardContent
        className="p-0"
        style={{
          color: "var(--component-card-body-fg)",
          fontSize: "var(--component-card-body-font-size)",
        }}
      >
        {children}
      </CardContent>
      {footer !== undefined ? (
        // bg-transparent 필요. bg-muted/50은 크롬 팔레트라 테마 미적용값임
        <CardFooter className="p-0 border-t-0 bg-transparent">{footer}</CardFooter>
      ) : null}
    </ShadcnCard>
  );
}
