import { Select as AntSelect } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import type { SelectProps } from "../../systems/props";

export function Select({
  items, groups, disabledItems, value, onValueChange, placeholder, disabled,
  size, label, ...rest
}: SelectProps) {
  const off = new Set(disabledItems ?? []);
  // groups[].items는 배열 아닌 객체. 배열로 읽으면 .map 에러 날 수 있음
  const opts = (rec: Record<string, string>) =>
    Object.keys(rec).map((v) => ({ value: v, label: rec[v] ?? v, disabled: off.has(v) }));

  // 타입 명시. 삼항연산자 두 분기 추론 시 합집합 타입 되어 options 못 받음
  const options: DefaultOptionType[] = groups
    ? groups.map((g) => ({
        label: g.label,
        // 그룹 안 항목만 포함. 그룹 밖 항목은 items로 전달
        options: opts(g.items),
      }))
    : opts(items);

  return (
    <AntSelect
      aria-label={rest["aria-label"] ?? (typeof label === "string" ? label : undefined)}
      value={value}
      onChange={(v: string) => onValueChange?.(v)}
      placeholder={placeholder}
      disabled={disabled}
      size={size as "small" | "middle" | "large" | undefined}
      options={options}
      status={rest["aria-invalid"] === true || rest["aria-invalid"] === "true"
        ? "error" : undefined}
    />
  );
}
