import {
  NavigationMenu as ShadcnNavigationMenu, NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import type { NavigationmenuProps } from "../../systems/props";

// 맨 윗줄 항목(메뉴 여는 버튼, 바로 가는 링크) 치수 지정. shadcn 버튼이 h-9 로 높이를 고정해 여백이 커지면 넘치므로 높이를 auto 로 풂
// 펼친 메뉴 안쪽 content-padding, content-radius 토큰은 연결 제외. 닫힌 화면에서 안 보여 확인할 수 없음
const TOP_ITEM =
  "h-auto rounded-(--component-navigationmenu-radius) " +
  "px-(--component-navigationmenu-padding-inline) py-(--component-navigationmenu-padding-block)";

export function Navigationmenu({ items, className }: NavigationmenuProps) {
  return (
    <ShadcnNavigationMenu className={className}>
      <NavigationMenuList>
        {items.map((it, i) => (
          <NavigationMenuItem key={i}>
            {it.content ? (
              <>
                <NavigationMenuTrigger className={TOP_ITEM}>{it.label}</NavigationMenuTrigger>
                <NavigationMenuContent>{it.content}</NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink
                className={TOP_ITEM}
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
