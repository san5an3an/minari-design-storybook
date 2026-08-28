import { Breadcrumb as AntBreadcrumb } from "antd";
import type { BreadcrumbProps } from "../../systems/props";

export function Breadcrumb({ items, separator }: BreadcrumbProps) {
  return (
    <AntBreadcrumb
      separator={separator}
      items={items.map((it, i) => ({
        key: i,
        title: it.label,
        href: it.href,
      }))}
    />
  );
}
