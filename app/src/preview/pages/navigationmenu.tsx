import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { NavigationmenuProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Navigationmenu = impl<NavigationmenuProps>(system, "navigationmenu");
  return (
    <>
      <Master note="고르면 위치가 옮겨져요. 고르면 일이 일어나는 건 Menu 예요.">
        <Navigationmenu
          items={[
            { label: "제품", href: "#", current: true },
            { label: "요금", href: "#" },
            { label: "문서", href: "#" },
            { label: "회사", href: "#" },
          ]}
        />
      </Master>

      <Kids axis="current" title="Parts" note="지금 자리를 반드시 표시해요. 길잡이인데 어디 있는지 모르면 길잡이가 아니에요.">
        <Kid label="지금 위치" hint="aria-current">
          <Navigationmenu
            items={[
              { label: "개요", href: "#" },
              { label: "시작하기", href: "#", current: true },
              { label: "예제", href: "#" },
            ]}
          />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "고르면 일이 일어날 때", then: <><b>Menu</b> 예요. 여기는 위치를 옮겨요.</> },
  { when: "안에 들어가는 것", then: <>실제 <code>&lt;a href&gt;</code> 여야 해요. 새 탭·뒤로 가기가 통해야 해요.</> },
  { when: "링크가 아주 많을 때", then: <>사이트 지도예요. 따로 한 쪽을 주는 게 나아요.</> },
];
