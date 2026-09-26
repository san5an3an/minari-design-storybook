import {
  ContextMenu as ShadcnContextMenu, ContextMenuCheckboxItem, ContextMenuContent,
  ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup,
  ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub,
  ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { renderMenuItems } from "./internal/menuItems";
import { withDims } from "./tone";
import type { ContextmenuProps } from "../../systems/props";

const CONTEXT_ITEM = withDims(
  ContextMenuItem,
  "px-(--component-contextmenu-item-padding-inline) py-(--component-contextmenu-item-padding-block)",
);

export function Contextmenu({ trigger, items, className }: ContextmenuProps) {
  return (
    <ShadcnContextMenu>
      <ContextMenuTrigger className={className}>{trigger}</ContextMenuTrigger>
      <ContextMenuContent className="rounded-(--component-contextmenu-radius) p-(--component-contextmenu-padding)">
        {renderMenuItems(items, {
          // 일반 항목에만 여백 지정. 체크, 라디오 항목은 shadcn 이 표시 자리(pl-7)를 따로 잡고 들여쓴 항목은 data-inset:pl-7 이 더 강함
          Item: CONTEXT_ITEM,
          CheckboxItem: ContextMenuCheckboxItem,
          RadioGroup: ContextMenuRadioGroup,
          RadioItem: ContextMenuRadioItem,
          Label: ContextMenuLabel,
          Separator: ContextMenuSeparator,
          Shortcut: ContextMenuShortcut,
          Group: ContextMenuGroup,
          Sub: ContextMenuSub,
          SubTrigger: ContextMenuSubTrigger,
          SubContent: ContextMenuSubContent,
        })}
      </ContextMenuContent>
    </ShadcnContextMenu>
  );
}
