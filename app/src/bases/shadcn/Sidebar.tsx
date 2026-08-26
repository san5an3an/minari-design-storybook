import { ChevronRight } from "lucide-react";
import {
  Collapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuGroup,
  DropdownMenuItem, DropdownMenuLabel, DropdownMenuRadioGroup, DropdownMenuRadioItem,
  DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent,
  DropdownMenuSubTrigger, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { renderMenuItems } from "./internal/menuItems";
import {
  Sidebar as ShadcnSidebar, SidebarContent, SidebarFooter, SidebarGroup,
  SidebarGroupAction, SidebarGroupContent, SidebarGroupLabel, SidebarHeader,
  SidebarInset, SidebarMenu, SidebarMenuAction, SidebarMenuBadge,
  SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton,
  SidebarMenuSubItem, SidebarProvider, SidebarRail, SidebarTrigger,
} from "@/components/ui/sidebar";
import type { SidebarImpl, SidebarProps } from "../../systems/props";

type Item = NonNullable<SidebarProps["items"]>[number];

// 줄 동작 목록에 메뉴 컴포넌트 재사용
const MENU_PARTS = {
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
};

// 하위 항목 펼치기 셀
function renderItem(it: Item, i: number) {
  if (it.items?.length) {
    return (
      <Collapsible
        key={i}
        defaultOpen={it.active}
        className="group/collapsible"
        render={<SidebarMenuItem />}
      >
        <CollapsibleTrigger
          render={
            <SidebarMenuButton
              tooltip={typeof it.label === "string" ? it.label : undefined}
            />
          }
        >
          {it.icon}
          <span>{it.label}</span>
          <ChevronRight className="ml-auto transition-transform duration-200 group-data-open/collapsible:rotate-90" />
        </CollapsibleTrigger>
        {it.badge ? <SidebarMenuBadge>{it.badge}</SidebarMenuBadge> : null}
        <CollapsibleContent>
          <SidebarMenuSub>
            {it.items.map((sub, si) => (
              <SidebarMenuSubItem key={si}>
                <SidebarMenuSubButton
                  isActive={sub.active}
                  render={sub.href ? <a href={sub.href} /> : undefined}
                >
                  <span>{sub.label}</span>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </Collapsible>
    );
  }
  return (
    <SidebarMenuItem key={i}>
      <SidebarMenuButton
        isActive={it.active}
        // 접히면 이름 숨김, 툴팁이 그때만 텍스트 표시
        tooltip={typeof it.label === "string" ? it.label : undefined}
        render={it.href ? <a href={it.href} /> : undefined}
        className={it.muted ? "text-sidebar-foreground/70" : undefined}
      >
        {it.icon}
        <span>{it.label}</span>
      </SidebarMenuButton>
      {renderAction(it)}
      {it.badge ? <SidebarMenuBadge>{it.badge}</SidebarMenuBadge> : null}
    </SidebarMenuItem>
  );
}

// 줄 오른쪽 동작, 목록 있으면 해당 동작이 트리거
function renderAction(it: Item) {
  if (!it.action) return null;
  if (!it.actionItems?.length) {
    return <SidebarMenuAction showOnHover={it.actionOnHover}>{it.action}</SidebarMenuAction>;
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={<SidebarMenuAction showOnHover={it.actionOnHover} />}
      >
        {it.action}
      </DropdownMenuTrigger>
      {/* 옆으로 펼침 처리. 사이드바가 화면 가장자리에 붙어 있어 아래로 펼치면 잘리는 문제 있음 */}
      <DropdownMenuContent side="right" align="start" className="w-fit">
        {renderMenuItems(it.actionItems, MENU_PARTS)}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function SidebarRoot({
  items, groups, header, footer, groupLabel, groupAction, collapsible = "icon",
  side = "left", defaultOpen = true, open, onOpenChange, showTrigger = true,
  children, className,
}: SidebarProps) {
  // 접힘 없는 값에서는 버튼 제외
  const canCollapse = collapsible !== "none";
  const list = groups ?? [{ label: groupLabel, action: groupAction, items: items ?? [] }];

  return (
    <SidebarProvider
      defaultOpen={defaultOpen}
      open={open}
      onOpenChange={onOpenChange}
      className={className}
    >
      <ShadcnSidebar side={side} collapsible={collapsible}>
        {header ? <SidebarHeader>{header}</SidebarHeader> : null}
        <SidebarContent>
          {list.map((g, gi) => (
            <SidebarGroup
              key={gi}
              className={g.hideWhenCollapsed ? "group-data-[collapsible=icon]:hidden" : undefined}
            >
              {g.label ? <SidebarGroupLabel>{g.label}</SidebarGroupLabel> : null}
              {g.action ? <SidebarGroupAction>{g.action}</SidebarGroupAction> : null}
              <SidebarGroupContent>
                <SidebarMenu>{g.items.map(renderItem)}</SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          ))}
        </SidebarContent>
        {footer ? <SidebarFooter>{footer}</SidebarFooter> : null}
        {/* 가장자리 드래그로도 여닫기 */}
        {canCollapse ? <SidebarRail /> : null}
      </ShadcnSidebar>
      <SidebarInset>
        {showTrigger && canCollapse ? <SidebarTrigger /> : null}
        {children}
      </SidebarInset>
    </SidebarProvider>
  );
}

// 모든 하위 컴포넌트 내보내기. 헤더, 푸터 메뉴 버튼 조합은 사용처에서 구성
export const Sidebar = Object.assign(SidebarRoot, {
  Menu: SidebarMenu,
  MenuItem: SidebarMenuItem,
  MenuButton: SidebarMenuButton,
  MenuBadge: SidebarMenuBadge,
  MenuAction: SidebarMenuAction,
  MenuSub: SidebarMenuSub,
  MenuSubItem: SidebarMenuSubItem,
  MenuSubButton: SidebarMenuSubButton,
  Trigger: SidebarTrigger,
}) as SidebarImpl;
