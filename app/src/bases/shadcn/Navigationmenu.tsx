import {
  NavigationMenu as ShadcnNavigationMenu, NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { NavigationmenuProps } from "../../systems/props";

export function Navigationmenu({ items, className }: NavigationmenuProps) {
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
      {/* NavigationMenuIndicator 조건부 렌더링 제거 */}
    </ShadcnNavigationMenu>
  );
}
