import { Steps } from "antd";
import type { StagesProps } from "../../systems/props";

export function Stages({ items, current }: StagesProps) {
  return (
    <Steps
      current={current}
      items={items.map((it, i) => ({ key: i, title: it.label }))}
    />
  );
}
