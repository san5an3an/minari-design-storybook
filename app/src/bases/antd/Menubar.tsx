import { Menu as AntMenu } from "antd";
import { toItems } from "./Menu";
import type { MenubarProps } from "../../systems/props";

export function Menubar({ menus, className }: MenubarProps) {
  return (
    <AntMenu
      className={className}
      mode="horizontal"
      items={menus.map((m, i) => ({
        key: String(i),
        label: m.label,
        children: toItems(m.items),
      }))}
    />
  );
}
