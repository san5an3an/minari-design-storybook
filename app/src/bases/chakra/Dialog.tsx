import * as React from "react";
import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import { dialogActionsStyle } from "../dialogActions";

export interface ChakraDialogProps {
  open: boolean;
  onClose:  => void;
  title: React.ReactNode;
  children?: React.ReactNode;
  actions?: React.ReactNode;
  stacked?: boolean;
}

export function Dialog({ open, onClose, title, children, actions, stacked }: ChakraDialogProps) {
  return (
    <ChakraDialog.Root
      open={open}
      onOpenChange={(e: { open: boolean }) => { if (!e.open) onClose; }}
    >
      <Portal>
        <ChakraDialog.Backdrop />
        <ChakraDialog.Positioner>
          <ChakraDialog.Content>
            <ChakraDialog.Header>
              <ChakraDialog.Title
                // 제목 굵기는 직접 선언값으로 고정. 베이스 기본값을 따르면 MUI 500, Mantine 400으로 값이 달라 일정하지 않음
                fontWeight="var(--base-font-weight-semibold)"
              >
                {title}
              </ChakraDialog.Title>
            </ChakraDialog.Header>
            {children ? <ChakraDialog.Body>{children}</ChakraDialog.Body> : null}
            {actions ? (
              // 마크업 순서는 항상 취소, 확인. column-reverse라 확인이 위 순서임
              <ChakraDialog.Footer css={dialogActionsStyle(stacked)}>
                {actions}
              </ChakraDialog.Footer>
            ) : null}
          </ChakraDialog.Content>
        </ChakraDialog.Positioner>
      </Portal>
    </ChakraDialog.Root>
  );
}
