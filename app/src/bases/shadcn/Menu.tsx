import * as React from "react";
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel,
  DropdownMenuCheckboxItem, DropdownMenuGroup, DropdownMenuRadioGroup,
  DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut,
  DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { renderMenuItems } from "./internal/menuItems";
import type { MenuProps } from "../../systems/props";

export function Menu({ trigger, items, side, align, minWidth }: MenuProps) {
  return (
    <DropdownMenu>
      {/* 트리거가 클릭 대상이면 render 전달, span 감싸면 초점 링이 엉뚱한 요소에 붙음 */}
      {React.isValidElement(trigger) ? (
        <DropdownMenuTrigger render={trigger as React.ReactElement} />
      ) : (
        <DropdownMenuTrigger render={<span />}>{trigger}</DropdownMenuTrigger>
      )}
      <DropdownMenuContent
        side={side}
        align={align}
        style={{
          width: "fit-content",
          maxWidth: "var(--available-width)",
          background: "var(--component-menu-bg)",
          borderColor: "var(--component-menu-border)",
          borderWidth: "var(--semantic-border-width-default)",
          borderRadius: "var(--component-menu-radius)",
          boxShadow: "var(--component-menu-shadow)",
          padding: "var(--component-menu-padding)",
          minWidth: minWidth ?? "var(--component-menu-min-width)",
        }}
      >
        {renderMenuItems(
          items,
          {
            Item: DropdownMenuItem,
            CheckboxItem: DropdownMenuCheckboxItem,
            RadioGroup: DropdownMenuRadioGroup,
            RadioItem: DropdownMenuRadioItem,
            Label: DropdownMenuLabel,
            Separator: DropdownMenuSeparator,
            Shortcut: DropdownMenuShortcut,
            Group: DropdownMenuGroup,
            Sub: DropdownMenuSub,
            SubTrigger: DropdownMenuSubTrigger,
            SubContent: DropdownMenuSubContent,
          },
          {
            item: {
              color: "var(--component-menu-item-fg)",
              fontSize: "var(--component-menu-item-font-size)",
              paddingInline: "var(--component-menu-item-padding-inline)",
              paddingBlock: "var(--component-menu-item-padding-block)",
              gap: "var(--component-menu-item-gap)",
              borderRadius:
                "max(0rem, calc(var(--component-menu-radius) - var(--component-menu-padding)))",
            },
            itemDanger: { color: "var(--component-menu-item-danger-fg)" },
            label: {
              color: "var(--component-menu-label-fg)",
              fontSize: "var(--component-menu-label-font-size)",
            },
            separator: { background: "var(--component-menu-separator)" },
          },
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
