import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { StagesProps } from "../../systems/props";
import type { PageProps } from "./types";

const ITEMS = [{ label: "장바구니" }, { label: "배송지" }, { label: "결제" }, { label: "완료" }];

export function Page({ system }: PageProps) {
  const Stages = impl<StagesProps>(system, "stages");

  return (
    <>
      <Master note="끝난 단계에는 체크, 지금 단계에는 aria-current 가 붙어요. 색만으로 나누지 않아요.">
        <Stages items={ITEMS} current={1} />
      </Master>

      <Kids axis="current" title="Current Step">
        {[0, 2, 3].map((c) => (
          <Kid key={c} label={`${c + 1}번째`}>
            <Stages items={ITEMS} current={c} />
          </Kid>
        ))}
      </Kids>

      <Kids
        axis="items"
        title="Step Count"
        note="단계가 대여섯을 넘으면 한 줄에 안 들어와요. 그때는 단계를 묶는 쪽을 먼저 봐요."
      >
        <Kid label="2단계">
          <Stages items={ITEMS.slice(0, 2)} current={0} />
        </Kid>
        <Kid label="4단계">
          <Stages items={ITEMS} current={2} />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "언제나",
    then: <>끝난 단계와 지금 단계를 색만으로 나누지 않아요. 체크와 번호가 함께 있어야 해요.</>,
  },
  {
    when: "비율을 보여 주려는 것일 때",
    then: (
      <>
        <b>Progress</b> 예요. 단계는 <b>이름</b>을 가지고, 비율은 안 가져요.
      </>
    ),
  },
  {
    when: "앞 단계로 돌아갈 수 있을 때",
    then: <>끝난 단계를 누를 수 있게 하고, 그렇지 않으면 누를 수 없게 둬요.</>,
  },
];
