import * as React from "react";
import { cn } from "@/lib/utils";

// 클래스 이름은 완성된 문자열로 지정. Tailwind 는 소스를 글자 그대로 읽어 p-(${X}) 처럼 조립한 이름은 CSS 가 안 생기는데 tailwind-merge 는 원본 p-4 를 지워 여백이 0 이 됨
// Footer 띠는 틀 여백과 같은 토큰으로 지정. shadcn Footer 가 -mx-4 -mb-4 p-4 rounded-b-xl 로 틀 끝까지 늘어나 네 값을 함께 바꿔야 띠가 틀에 붙음
export const DIALOG_CONTENT = "gap-(--component-dialog-gap) rounded-(--component-dialog-radius) p-(--component-dialog-padding)";
export const DIALOG_FOOTER = "-mx-(--component-dialog-padding) -mb-(--component-dialog-padding) p-(--component-dialog-padding) rounded-b-(--component-dialog-radius) gap-(--component-dialog-actions-gap)";
import {
  Dialog as ShadcnDialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

export interface ShadcnDialogProps {
  trigger?: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  body?: React.ReactNode;
  actions?: React.ReactNode;
  stacked?: boolean;
}

export function Dialog({
  trigger, open, onClose, title, children, body, actions, stacked,
}: ShadcnDialogProps) {
  return (
    <ShadcnDialog open={open} onOpenChange={(next: boolean) => { if (!next) onClose(); }}>
      {trigger ? (
        React.isValidElement(trigger)
          ? <DialogTrigger render={trigger as React.ReactElement} />
          : <DialogTrigger>{trigger}</DialogTrigger>
      ) : null}
      <DialogContent className={DIALOG_CONTENT}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {children ? <DialogDescription>{children}</DialogDescription> : null}
        </DialogHeader>
        {body}
        {actions ? (
          <DialogFooter className={cn(DIALOG_FOOTER, stacked && "sm:flex-col-reverse")}>
            {actions}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </ShadcnDialog>
  );
}
