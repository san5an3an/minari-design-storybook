import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { KbdImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Kbd = compound<KbdImpl>(system, "kbd");
  return (
    <>
      <Master note="눌러도 아무 일이 없어요. 이건 '키보드의 그 키를 누르세요'라는 설명이에요.">
        <Kbd>K</Kbd>
      </Master>

      <Kids axis="parts" title="Parts" note="조합키는 키마다 하나씩 내요. 한 덩어리로 적으면 스크린리더가 통째로 읽어요.">
        <Kid label="Group">
          <Kbd.Group keys={["⌘", "K"]} />
          <Kbd.Group keys={["Ctrl", "Shift", "P"]} />
        </Kid>
      </Kids>

      <Kids axis="inline" title="Usage" note="글 안에 섞여 서요. 줄 높이를 늘리지 않아요.">
        <Kid label="문장 안">
          <span>
            저장하려면 <Kbd.Group keys={["⌘", "S"]} /> 를 누르세요
          </span>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "누르면 무언가 일어나야 할 때", then: <><b>Button</b> 이에요. 이건 설명이에요.</> },
  { when: "조합키를 적을 때", then: <>키마다 하나씩 내고 <code>Kbd.Group</code> 으로 묶어요.</> },
];
