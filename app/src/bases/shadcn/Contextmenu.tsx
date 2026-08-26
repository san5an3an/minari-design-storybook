import {
  ContextMenu as ShadcnContextMenu, ContextMenuCheckboxItem, ContextMenuContent,
  ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup,
  ContextMenuRadioItem, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub,
  ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { renderMenuItems } from "./internal/menuItems";
import type { ContextmenuProps } from "../../systems/props";

export function Contextmenu({ trigger, items, className }: ContextmenuProps) {
  return (
    <ShadcnContextMenu>
      <ContextMenuTrigger className={className}>{trigger}</ContextMenuTrigger>
      <ContextMenuContent>
        {renderMenuItems(items, {
          Item: ContextMenuItem,
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
