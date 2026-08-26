import * as React from "react";
import { AlignCenter, AlignLeft, AlignRight } from "lucide-react";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { SegmentedImpl } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Segmented = compound<SegmentedImpl>(system, "segmented");
  const [v, setV] = React.useState<string[]>(["list"]);
  return (
    <>
      <Master note="내용은 그대로고 보는 방식만 바뀌어요. 내용 자체가 바뀌면 Tabs 예요.">
        <Segmented value={v} onValueChange={setV}>
          <Segmented.Item value="list">목록</Segmented.Item>
          <Segmented.Item value="grid">바둑판</Segmented.Item>
          <Segmented.Item value="chart">그래프</Segmented.Item>
        </Segmented>
      </Master>

      <Kids axis="state" title="State" note="값은 배열로 오가요. 하나만 고를 수 있다는 것과 값이 하나라는 것은 다른 말이에요.">
        <Kid label="하나만" hint="기본">
          <Segmented defaultValue={["day"]}>
            <Segmented.Item value="day">일</Segmented.Item>
            <Segmented.Item value="week">주</Segmented.Item>
            <Segmented.Item value="month">월</Segmented.Item>
          </Segmented>
        </Kid>
        <Kid label="여럿" hint="multiple">
          <Segmented multiple defaultValue={["b", "i"]}>
            <Segmented.Item value="b">B</Segmented.Item>
            <Segmented.Item value="i">I</Segmented.Item>
            <Segmented.Item value="u">U</Segmented.Item>
          </Segmented>
        </Kid>
        <Kid label="disabled">
          <Segmented defaultValue={["day"]} disabled>
            <Segmented.Item value="day">일</Segmented.Item>
            <Segmented.Item value="week">주</Segmented.Item>
          </Segmented>
        </Kid>
      </Kids>

      <Kids axis="size" title="Anatomy">
        {["sm", "md", "lg"].map((s) => (
          <Kid key={s} label={s} hint={s === "md" ? "기본" : undefined}>
            <Segmented size={s} defaultValue={["l"]}>
              <Segmented.Item value="l"><AlignLeft /></Segmented.Item>
              <Segmented.Item value="c"><AlignCenter /></Segmented.Item>
              <Segmented.Item value="r"><AlignRight /></Segmented.Item>
            </Segmented>
          </Kid>
        ))}
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "내용 자체가 바뀔 때", then: <><b>Tabs</b> 예요. 세그먼티드는 <b>보는 방식</b>만 바꿔요.</> },
  { when: "하나를 켜고 끌 때", then: <><b>Toggle</b> 이에요. 여기는 여럿 중에 골라요.</> },
  { when: "셀이 다섯을 넘을 때", then: <><b>Select</b> 로 바꾸세요. 가로로 다 늘어놓으면 글자가 잘려요.</> },
];
