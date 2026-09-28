import * as React from "react";
import {
  Dialog as ShadcnDialog, DialogContent, DialogDescription,
  DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";

export interface ShadcnDialogProps {
  trigger?: React.ReactNode;
  open: boolean;
  onClose:  => void;
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
    <ShadcnDialog open={open} onOpenChange={(next: boolean) => { if (!next) onClose; }}>
      {trigger ? (
        React.isValidElement(trigger)
          ? <DialogTrigger render={trigger as React.ReactElement} />
          : <DialogTrigger>{trigger}</DialogTrigger>
      ) : null}
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {children ? <DialogDescription>{children}</DialogDescription> : null}
        </DialogHeader>
        {body}
        {actions ? (
          <DialogFooter className={stacked ? "sm:flex-col-reverse" : undefined}>
            {actions}
          </DialogFooter>
        ) : null}
      </DialogContent>
    </ShadcnDialog>
  );
}
