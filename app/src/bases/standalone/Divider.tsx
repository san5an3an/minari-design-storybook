import { cx } from "../cx";
import type { DividerProps } from "../../systems/props";

export function Divider({ strong, inset, vertical, label }: DividerProps) {
  const line = (extra?: string) => (
    <hr
      className={cx(
        "ods-divider",
        strong && "ods-divider--strong",
        inset && "ods-divider--inset",
        vertical && "ods-divider--vertical",
        extra,
      )}
    />
  );

  if (label === undefined) return line;

  return <div className="ods-divider-labeled">{label}</div>;
}
