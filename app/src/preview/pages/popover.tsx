import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { PopoverProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Popover = impl<PopoverProps>(system, "popover");
  const Button = system.impl.button;
  return (
    <>
      <Master note="눌러야 떠요. 뒤 화면은 그대로 살아 있어서 흐름이 멈추지 않아요.">
        <Popover
          trigger={<Button variant="outline">알림 설정</Button>}
          title="알림 받기"
          description="새 글이 올라오면 알려드려요."
        />
      </Master>

      <Kids axis="side" title="Variants" note="어느 쪽에 뜰지 못 정하면 그쪽이 위치를 보고 알아서 뒤집어요.">
        {(["top", "right", "bottom", "left"] as const).map((s) => (
          <Kid key={s} label={s} hint={s === "bottom" ? "기본" : undefined}>
            <Popover side={s} trigger={<Button variant="outline">{s}</Button>} title="여기예요" />
          </Kid>
        ))}
      </Kids>

      <Kids axis="content" title="Usage" note="안에 누를 것이 들어가요. 그래서 키보드로 그 안까지 들어갈 수 있어야 해요.">
        <Kid label="글만">
          <Popover trigger={<Button variant="outline">설명</Button>} description="이건 보조 설명이에요." />
        </Kid>
        <Kid label="+ 동작">
          <Popover trigger={<Button variant="outline">공유</Button>} title="공유하기">
            <Button>링크 복사할게요</Button>
          </Popover>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "설명 한 줄일 때", then: <><b>Tooltip</b> 이에요. 팝오버는 누를 것이 들어갈 때 써요.</> },
  { when: "고르면 닫힐 때", then: <><b>Menu</b> 예요. 팝오버는 머무는 자리예요.</> },
  { when: "놓치면 곤란할 때", then: <><b>Dialog</b> 예요. 팝오버는 뒤 화면을 멈추지 않아요.</> },
];
