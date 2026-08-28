import { Collapse } from "antd";
import type { AccordionProps } from "../../systems/props";

export function Accordion({ items, multiple, defaultValue }: AccordionProps) {
  return (
    <Collapse
      // 계약의 multiple과 accordion은 값이 반대라 뒤집어 전달
      accordion={!multiple}
      defaultActiveKey={defaultValue as string[] | undefined}
      items={items.map((it) => ({
        key: it.value,
        label: it.title,
        children: it.body,
      }))}
    />
  );
}
