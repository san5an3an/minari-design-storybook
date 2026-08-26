import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { TooltipProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Tooltip = impl<TooltipProps>(system, "tooltip");

  return (
    <>
      <Master note="마우스를 올리거나 Tab 으로 포커스를 줘 보세요. 둘 다 되어야 해요.">
        <Tooltip content="이름은 나중에 바꿀 수 있어요">
          <span style={{ textDecoration: "underline dotted" }}>이름</span>
        </Tooltip>
      </Master>

      <Kids
        axis="side"
        note={
          <>
            기본은 <b>위</b>예요. 손가락이 가리지 않으니까요. 대상이 화면 가장자리에 붙어 잘릴
            때만 바꿔요. 왼쪽 끝 버튼은 위아래로는 안 잘려도 <b>왼쪽으로는 잘려요</b>.
          </>
        }
      >
        {(["top", "right", "bottom", "left"] as const).map((s) => (
          <Kid key={s} label={s} hint={s === "top" ? "기본" : undefined}>
            <Tooltip content={`${s} 에 떠요`} side={s}>
              <span style={{ textDecoration: "underline dotted" }}>{s}</span>
            </Tooltip>
          </Kid>
        ))}
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "없으면 곤란한 말일 때",
    then: (
      <>
        툴팁에 두지 않아요. <b>손가락에는 hover 가 없어요.</b> Input 의 <code>help</code> 위치에
        둬요.
      </>
    ),
  },
  {
    when: "아이콘 버튼에 붙일 때",
    then: (
      <>
        툴팁이 <code>aria-label</code> 을 대신하지 않아요. 둘 다 필요해요.
      </>
    ),
  },
];
