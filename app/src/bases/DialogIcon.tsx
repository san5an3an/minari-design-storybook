import { Trash2, TriangleAlert } from "lucide-react";

const ICON = { warning: TriangleAlert, danger: Trash2 } as const;

export function hasDialogIcon(tone?: string): boolean {
  return tone !== undefined && tone in ICON;
}

export function DialogIcon({ tone }: { tone?: string }) {
  // 중립 상태에서 표시 제외
  const Icon = ICON[tone as keyof typeof ICON];
  if (!Icon) return null;

  return (
    <span
      aria-hidden
      // 클래스와 인라인을 함께 지정. 서로 다른 대상이 읽기 때문임
      className="ods-dialog-icon"
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        width: "var(--component-dialog-icon-size)",
        height: "var(--component-dialog-icon-size)",
        borderRadius: "var(--component-dialog-icon-radius)",
        background: `var(--component-dialog-${tone}-bg)`,
        color: `var(--component-dialog-${tone}-fg)`,
      }}
    >
      <Icon style={{ width: "50%", height: "50%" }} />
    </span>
  );
}
