import type { CSSProperties } from "react";

export const DIALOG_ACTIONS_BAND: CSSProperties = {
  background: "var(--component-dialog-actions-bg)",
  borderTop:
    "var(--semantic-border-width-default) solid var(--component-dialog-actions-border)",
  padding: "var(--component-dialog-padding)",
  borderEndStartRadius: "var(--component-dialog-radius)",
  borderEndEndRadius: "var(--component-dialog-radius)",
};

// 가로 배치, 오른쪽 끝에 고정
export const DIALOG_ACTIONS_ROW: CSSProperties = {
  ...DIALOG_ACTIONS_BAND,
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: "var(--component-dialog-actions-gap)",
};

// 세로 배치 시 마크업 유지, column-reverse로 반전해 확인 위 취소 아래 배치
export const DIALOG_ACTIONS_STACK: CSSProperties = {
  ...DIALOG_ACTIONS_BAND,
  display: "flex",
  flexDirection: "column-reverse",
  alignItems: "stretch",
  gap: "var(--component-dialog-actions-gap)",
};

export function dialogActionsStyle(stacked?: boolean): CSSProperties {
  return stacked ? DIALOG_ACTIONS_STACK : DIALOG_ACTIONS_ROW;
}
