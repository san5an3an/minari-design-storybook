import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { StepperProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Stepper = impl<StepperProps>(system, "stepper");
  const [n, setN] = React.useState(2);

  return (
    <>
      <Master note="눌러서 바꿔 보세요. 한계에 닿으면 그 버튼이 막혀요.">
        <Stepper value={n} min={1} max={9} onValueChange={setN} aria-label="수량" />
      </Master>

      <Kids
        axis="value"
        title="Limit"
        note="막지 않으면 눌러도 아무 일이 없고, 그게 한계 때문인지 고장인지 알 수 없어요."
      >
        <Kid label="최소값">
          <Stepper value={1} min={1} max={9} aria-label="최소" />
        </Kid>
        <Kid label="가운데">
          <Stepper value={5} min={1} max={9} aria-label="가운데" />
        </Kid>
        <Kid label="최대값">
          <Stepper value={9} min={1} max={9} aria-label="최대" />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "언제나",
    then: (
      <>
        <code>aria-label</code> 이 필요해요. 숫자만 있으면 무엇의 수인지 알 수 없어요.
      </>
    ),
  },
  {
    when: "수가 크게 뛸 수 있을 때",
    then: (
      <>
        <b>Input</b> 을 함께 둬요. 1에서 60까지 누르게 하지 않아요.
      </>
    ),
  },
  {
    when: "단계를 보여 주려는 것일 때",
    then: (
      <>
        <b>Stages</b> 예요. 이름이 비슷할 뿐 다른 물건이에요.
      </>
    ),
  },
];
