import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { MenubarProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Menubar = impl<MenubarProps>(system, "menubar");
  return (
    <>
      <Master note="라벨이 늘 보여요. 그래서 무엇이 있는지 알 수 있고, 오른쪽 누르기의 발견 문제가 없어요.">
        <Menubar
          menus={[
            { label: "파일", items: [
              { label: "새로 만들기", hint: "⌘N" },
              { label: "열기", hint: "⌘O" },
              { separator: true },
              { label: "저장", hint: "⌘S" },
            ] },
            { label: "편집", items: [
              { label: "실행 취소", hint: "⌘Z" },
              { label: "다시 실행", hint: "⇧⌘Z" },
            ] },
            { label: "보기", items: [{ label: "전체 화면", hint: "⌃⌘F" }] },
          ]}
        />
      </Master>

      <Kids axis="usage" title="Usage" note="동작이 아주 많을 때만 써요. 몇 개뿐인데 이 줄을 두면 누를 게 셋인 서랍장이 돼요.">
        <Kid label="필드가 둘">
          <Menubar
            menus={[
              { label: "파일", items: [{ label: "열기", hint: "⌘O" }] },
              { label: "도움말", items: [{ label: "단축키 보기" }] },
            ]}
          />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "동작이 적을 때", then: <><b>Toolbar</b> 나 <b>Menu</b> 로 충분해요.</> },
  { when: "열어 둔 채 옆으로", then: <>옆 필드가 이어서 열려요. 그게 막대로 둔 뜻이에요.</> },
  { when: "펼쳐지는 목록", then: <><b>Menu</b> 와 같은 계열이에요. 따로 만들지 않아요.</> },
];
