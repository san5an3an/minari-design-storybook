import { List } from "antd";
import type { ListRowImpl, ListRowProps } from "../../systems/props";

function ListRowRoot({ lead, title, sub, trail, className }: ListRowProps) {
  return (
    <List.Item className={className} actions={trail ? [trail] : undefined}>
      <List.Item.Meta avatar={lead} title={title} description={sub} />
    </List.Item>
  );
}

export const Listrow = Object.assign(ListRowRoot, {
  List,
}) as unknown as ListRowImpl;
