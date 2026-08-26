import {
  Menubar as ShadcnMenubar, MenubarCheckboxItem, MenubarContent, MenubarGroup,
  MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem,
  MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent,
  MenubarSubTrigger, MenubarTrigger,
} from "@/components/ui/menubar";
import { renderMenuItems } from "./internal/menuItems";
import type { MenubarProps } from "../../systems/props";

export function Menubar({ menus, className }: MenubarProps) {
  return (
    <ShadcnMenubar className={className}>
      {menus.map((m, mi) => (
        <MenubarMenu key={mi}>
          <MenubarTrigger>{m.label}</MenubarTrigger>
          <MenubarContent>
            {renderMenuItems(m.items, {
              Item: MenubarItem,
              CheckboxItem: MenubarCheckboxItem,
              RadioGroup: MenubarRadioGroup,
              RadioItem: MenubarRadioItem,
              Label: MenubarLabel,
              Separator: MenubarSeparator,
              Shortcut: MenubarShortcut,
              Group: MenubarGroup,
              Sub: MenubarSub,
              SubTrigger: MenubarSubTrigger,
              SubContent: MenubarSubContent,
            })}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </ShadcnMenubar>
  );
}
