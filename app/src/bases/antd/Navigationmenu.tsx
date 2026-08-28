import { Menu as AntMenu } from "antd";
import type { NavigationmenuProps } from "../../systems/props";

export function Navigationmenu({ items, className }: NavigationmenuProps) {
  const current = items.findIndex((i) => i.current);
  return (
    <AntMenu
      className={className}
      mode="horizontal"
      selectedKeys={current >= 0 ? [String(current)] : []}
      items={items.map((it, i) => ({
        key: String(i),
        // 링크는 label 안의 a를 그대로 사용. 별도로 감싸지 않음
        label: it.href ? <a href={it.href}>{it.label}</a> : it.label,
      }))}
    />
  );
}
