import { Tabs as AntTabs } from "antd";
import type { TabsProps } from "../../systems/props";

export function Tabs({ items, defaultValue, orientation = "horizontal" }: TabsProps) {
  const first = items.find((i) => !i.disabled)?.value ?? items[0]?.value;

  return (
    <AntTabs
      defaultActiveKey={defaultValue ?? first}
      tabPlacement={orientation === "vertical" ? "start" : "top"}
      items={items.map((it) => ({
        key: it.value,
        label: it.label,
        icon: it.icon,
        disabled: it.disabled,
        children: it.content,
      }))}
    />
  );
}
