import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { AccordionProps } from "../../systems/props";
import type { PageProps } from "./types";

const ITEMS = [
  { value: "a", title: "배송은 얼마나 걸리나요?", body: "영업일 기준 2~3일 걸려요." },
  { value: "b", title: "교환할 수 있나요?", body: "받은 날부터 7일 안에 교환할 수 있어요." },
  { value: "c", title: "영수증을 받을 수 있나요?", body: "결제 내역 화면에서 내려받을 수 있어요." },
];

export function Page({ system }: PageProps) {
  const Accordion = impl<AccordionProps>(system, "accordion");

  return (
    <>
      <Master note="머리를 눌러 펴 보세요. Space · Enter 로도 열려요.">
        <div style={{ width: "100%" }}>
          <Accordion items={ITEMS} />
        </div>
      </Master>

      <Kids
        axis="multiple"
        note={
          <>
            <b>동시에 비교해야 하는가</b>가 Tabs 와 이것을 갈라요. 하나만 열려야 한다면 탭이 나아요.
          </>
        }
      >
        <Kid label="false" hint="기본 · 하나만">
          <div style={{ flex: 1 }}>
            <Accordion items={ITEMS} />
          </div>
        </Kid>
        <Kid label="true" hint="여럿 함께">
          <div style={{ flex: 1 }}>
            <Accordion items={ITEMS} multiple defaultValue={["a", "b"]} />
          </div>
        </Kid>
      </Kids>

      <Kids axis="defaultValue" title="Default Open">
        <Kid label="첫 번째" hint="기본">
          <div style={{ flex: 1 }}>
            <Accordion items={ITEMS} />
          </div>
        </Kid>
        <Kid label="전부 접힘">
          <div style={{ flex: 1 }}>
            <Accordion items={ITEMS} defaultValue={[]} />
          </div>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  {
    when: "한 번에 하나만 봐야 할 때",
    then: (
      <>
        <b>Tabs</b> 예요. 아코디언은 여럿을 함께 펼 수 있다는 것이 정체예요.
      </>
    ),
  },
  {
    when: "안에 든 내용이 짧을 때",
    then: <>접지 않아요. 펴는 손짓 한 번이 읽는 시간보다 길어져요.</>,
  },
];
