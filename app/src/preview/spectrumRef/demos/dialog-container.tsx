// @ts-nocheck
/* 자동 생성 — tools/gen_spectrum_demo_modules.py. 손으로 고치지 말 것.
 * 원문: adobe/react-spectrum@3.47.5:packages/@adobe/react-spectrum/docs/dialog/DialogContainer.mdx 의 `tsx example` 펜스를 합성했다
 * (서브패키지 import 는 설치된 집합 패키지 @adobe/react-spectrum 이름으로 재작성). */
import * as React from "react";
import { ActionButton, AlertDialog, Button, ButtonGroup, Content, Dialog, DialogContainer, Divider, Form, Heading, Item, Menu, MenuTrigger, Text, TextField } from "@adobe/react-spectrum";
import More from '@spectrum-icons/workflow/More';
import Delete from '@spectrum-icons/workflow/Delete';
import Edit from '@spectrum-icons/workflow/Edit';

function Example(props) {
  let [isOpen, setOpen] = React.useState(false);

  return (
    <>
      <ActionButton onPress={() => setOpen(true)}>
        <Delete />
        <Text>Delete</Text>
      </ActionButton>
      <DialogContainer onDismiss={() => setOpen(false)} {...props}>
        {isOpen &&
          <AlertDialog
            title="Delete"
            variant="destructive"
            primaryActionLabel="Delete">
            Are you sure you want to delete this item?
          </AlertDialog>
        }
      </DialogContainer>
    </>
  );
}

export const demos = {
  "example": Example,
};
export const skipped: Record<string, { code: string; detail: string }> = {
  "dialog-triggered-by-a-menu-item": { code: "runtime-unavailable", detail: "공식 예제가 `<Dialog>` 를 `DialogTrigger`/`DialogContainer` 밖에서 그려요 — 그쪽 문서 사이트는 감싸 주지만 우리 칸은 그 짝을 못 만들어서 `Cannot call useDialogContext outside a <DialogTrigger> or <DialogContainer>` 로 터져요." },
  "full-screen": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: EditDialog" },
  "full-screen-takeover": { code: "other", detail: "\uacf5\uc2dd \ud39c\uc2a4\uac00 \ubb38\uc11c \uc0ac\uc774\ud2b8 \uc2a4\ucf54\ud504\uc5d0 \uae30\ub300\uc694 \u2014 \uc6b0\ub9ac \uc124\uce58\ubcf8\uc5d0 \uc5c6\ub294 \uc774\ub984: EditDialog" },
};
