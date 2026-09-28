import { createContext, useContext, useState } from "react";
import { cx } from "../cx";
import type { SegmentedImpl, SegmentedProps } from "../../systems/props";

type Ctx = {
  value: string[];
  multiple: boolean;
  disabled?: boolean;
  toggle: (v: string) => void;
};
const SegCtx = createContext<Ctx | null>(null);

function SegmentedRoot({
  value,
  defaultValue,
  onValueChange,
  multiple = false,
  disabled,
  className,
  children,
}: SegmentedProps) {
  const [inner, setInner] = useState<string[]>(defaultValue ?? []);
  const current = value !== undefined ? value : inner;

  const toggle = (v: string) => {
    const next = multiple
      ? current.includes(v) ? current.filter((x) => x !== v) : [...current, v]
      // 단일 선택도 배열로 반환. 선택 항목 재클릭해도 유지
      : [v];
    if (value === undefined) setInner(next);
    onValueChange?.(next);
  };

  return (
    <SegCtx.Provider value={{ value: current, multiple, disabled, toggle }}>
      <div className={cx("ods-segmented", className)} role="radiogroup">
        {children}
      </div>
    </SegCtx.Provider>
  );
}

function Item({
  value,
  disabled,
  className,
  children,
}: {
  value: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const ctx = useContext(SegCtx);
  const on = ctx?.value.includes(value) ?? false;
  return (
    <button
      type="button"
      className={cx("ods-segmented-item", className)}
      role="radio"
      aria-checked={on}
      disabled={disabled || ctx?.disabled}
      onClick={ => ctx?.toggle(value)}
    >
      {children}
    </button>
  );
}

export const Segmented = Object.assign(SegmentedRoot, { Item }) as SegmentedImpl;
