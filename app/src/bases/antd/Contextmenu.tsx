import { Dropdown } from "antd";
import { toItems } from "./Menu";
import type { ContextmenuProps } from "../../systems/props";

export function Contextmenu({ trigger, items, children }: ContextmenuProps) {
  return (
    <Dropdown menu={{ items: toItems(items) }} trigger={["contextMenu"]}>
      {(trigger ?? children) as React.ReactElement}
    </Dropdown>
  );
}
