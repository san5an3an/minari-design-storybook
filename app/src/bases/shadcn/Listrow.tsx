import type { ReactNode } from "react";
import {
  Item, ItemActions, ItemContent, ItemDescription, ItemFooter, ItemGroup,
  ItemHeader, ItemMedia, ItemTitle,
} from "@/components/ui/item";
import type { ListRowImpl, ListRowProps } from "../../systems/props";

function ListRowRoot({
  interactive, lead, title, sub, trail, header, footer, className,
}: ListRowProps) {
  return (
    <Item
      className={className}
      // 클릭 가능한 행만 포커스 지정. 전체 포커스 시 Tab 이동이 과도해지는 문제 있음
      tabIndex={interactive ? 0 : undefined}
      data-interactive={interactive ? "true" : undefined}
    >
      {/* 헤더, 푸터 슬롯. 날짜, 태그 등을 넣을 위치 */}
      {header === undefined ? null : <ItemHeader>{header}</ItemHeader>}
      {lead === undefined ? null : <ItemMedia variant="icon">{lead}</ItemMedia>}
      <ItemContent>
        <ItemTitle>{title}</ItemTitle>
        {sub === undefined ? null : <ItemDescription>{sub}</ItemDescription>}
      </ItemContent>
      {trail === undefined ? null : <ItemActions>{trail}</ItemActions>}
      {footer === undefined ? null : <ItemFooter>{footer}</ItemFooter>}
    </Item>
  );
}

// 줄은 목록 안에서만 의미가 있음. 개별로는 단순 카드임
function List({ children }: { children?: ReactNode }) {
  return <ItemGroup>{children}</ItemGroup>;
}

export const Listrow = Object.assign(ListRowRoot, { List }) as ListRowImpl;
