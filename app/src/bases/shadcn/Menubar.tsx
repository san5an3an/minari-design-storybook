import {
  Menubar as ShadcnMenubar, MenubarCheckboxItem, MenubarContent, MenubarGroup,
  MenubarItem, MenubarLabel, MenubarMenu, MenubarRadioGroup, MenubarRadioItem,
  MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent,
  MenubarSubTrigger, MenubarTrigger,
} from "@/components/ui/menubar";
import { renderMenuItems } from "./internal/menuItems";
import { cn } from "@/lib/utils";
import type { MenubarProps } from "../../systems/props";

export function Menubar({ menus, className }: MenubarProps) {
  return (
    // 겉 높이 h-8 고정 해제. 버튼 여백을 토큰으로 키우면 틀 밖으로 넘침
    <ShadcnMenubar
      className={cn(
        "h-auto gap-(--component-menubar-gap) rounded-(--component-menubar-radius) p-(--component-menubar-padding)",
        className,
      )}
    >
      {menus.map((m, mi) => (
        <MenubarMenu key={mi}>
          <MenubarTrigger className="px-(--component-menubar-trigger-padding-inline) py-(--component-menubar-trigger-padding-block)">
            {m.label}
          </MenubarTrigger>
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
