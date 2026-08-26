import {
  NavigationMenu as ShadcnNavigationMenu, NavigationMenuContent, NavigationMenuIndicator,
  NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { NavigationmenuProps } from "../../systems/props";

export function Navigationmenu({ items, indicator, className }: NavigationmenuProps) {
  return (
    <ShadcnNavigationMenu className={className}>
      <NavigationMenuList>
        {items.map((it, i) => (
          <NavigationMenuItem key={i}>
            {it.content ? (
              <>
                <NavigationMenuTrigger>{it.label}</NavigationMenuTrigger>
                <NavigationMenuContent>{it.content}</NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                href={it.href ?? "#"}
                aria-current={it.current ? "page" : undefined}
                data-active={it.current ? "" : undefined}
              >
                {it.label}
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      {/* 펼쳐지는 영역이 어느 항목에서 나왔는지 표시. 없으면 영역만 떠서 원인을 알 수 없음 */}
      {indicator ? <NavigationMenuIndicator /> : null}
    </ShadcnNavigationMenu>
  );
}
