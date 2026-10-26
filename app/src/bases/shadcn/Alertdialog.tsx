import * as React from "react";
import { cn } from "@/lib/utils";
import type { CSSProperties } from "react";
import {
  AlertDialog as ShadcnAlertDialog, AlertDialogAction, AlertDialogCancel,
  AlertDialogContent, AlertDialogDescription, AlertDialogFooter,
  AlertDialogHeader, AlertDialogMedia, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import type { AlertdialogProps } from "../../systems/props";

// 클래스 이름은 완성된 문자열로 지정. Tailwind 는 소스를 글자 그대로 읽어 p-(${X}) 처럼 조립한 이름은 CSS 가 안 생기는데 tailwind-merge 는 원본 p-4 를 지워 여백이 0 이 됨

const DESTRUCTIVE_MEDIA =
  "bg-destructive/10 text-destructive dark:bg-destructive/20 dark:text-destructive";

const SURFACE = {
  "--popover": "var(--component-alertdialog-bg, var(--background))",
  "--muted": "var(--component-alertdialog-media-bg, var(--card))",
} as CSSProperties;

// Footer 띠는 Dialog 와 같이 틀 여백과 같은 토큰으로 지정. 틀, 띠, 음수 여백, 아래 모서리를 함께 바꿔야 띠가 틀에 붙음
// 띠 안 버튼 간격은 shadcn 원본 gap-2 사용. alertdialog 에는 actions-gap 토큰이 없음
const ALERT_CONTENT = "gap-(--component-alertdialog-gap) rounded-(--component-alertdialog-radius) p-(--component-alertdialog-padding)";
const ALERT_FOOTER = "-mx-(--component-alertdialog-padding) -mb-(--component-alertdialog-padding) p-(--component-alertdialog-padding) rounded-b-(--component-alertdialog-radius)";

export function Alertdialog({
  trigger, title, description, media, variant = "default", size = "default",
  cancelLabel = "그대로 둘게요",
  actionLabel = "지울게요", onAction, children, className,
  open, defaultOpen, onOpenChange,
}: AlertdialogProps) {
  const destructive = variant === "destructive";
  return (
    <ShadcnAlertDialog open={open} defaultOpen={defaultOpen} onOpenChange={onOpenChange}>
      {trigger ? (
        React.isValidElement(trigger)
          ? <AlertDialogTrigger render={trigger as React.ReactElement} />
          : <AlertDialogTrigger>{trigger}</AlertDialogTrigger>
      ) : null}
      <AlertDialogContent size={size} className={cn(ALERT_CONTENT, className)} style={SURFACE}>
        <AlertDialogHeader
          className="sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-cols-[max-content_1fr]"
          style={{ columnGap: "var(--component-alertdialog-media-gap)" }}
        >
          {/* 표시 위치는 AlertDialogMedia. 못 돌이킬 결정일수록 색보다 모양 강조 규칙임 */}
          {media ? (
            <AlertDialogMedia className={cn("rounded-(--component-alertdialog-media-radius)", destructive && DESTRUCTIVE_MEDIA)}>
              {media}
            </AlertDialogMedia>
          ) : null}
          {/* 굵기 변경 금지. 공식 기본값 font-medium 그대로 사용 */}
          {title ? <AlertDialogTitle>{title}</AlertDialogTitle> : null}
          {description ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : null}
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter className={ALERT_FOOTER}>
          {/* Cancel에 variant 지정하지 않기. 기본값이 이미 outline임 */}
          {/* data-cancel, data-confirm은 검사용, 순서 바뀌면 반대를 누를 수 있음 */}
          <AlertDialogCancel
            data-cancel="true"
            style={{ borderRadius: "var(--component-button-radius)" }}
          >
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            data-confirm="true"
            data-destructive={destructive ? "true" : undefined}
            variant={destructive ? "destructive" : "default"}
            style={{ borderRadius: "var(--component-button-radius)" }}
            onClick={onAction}
          >
            {actionLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </ShadcnAlertDialog>
  );
}
