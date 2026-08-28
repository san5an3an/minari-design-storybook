import { AutoComplete } from "antd";
import type { DefaultOptionType } from "antd/es/select";
import type { ComboboxProps } from "../../systems/props";

export function Combobox({ items, groups, placeholder, empty, className }: ComboboxProps) {
  const opt = (v: string) => ({ value: v, label: v });
  const options: DefaultOptionType[] = groups
    ? groups.map((g) => ({ label: g.label, options: g.items.map(opt) }))
    : items.map(opt);

  return (
    <AutoComplete
      className={className}
      placeholder={placeholder}
      options={options}
      // 비어 있을 때 표시 내용은 contract가 결정
      notFoundContent={empty}
    />
  );
}
