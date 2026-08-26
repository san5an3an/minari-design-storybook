import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { DatepickerProps } from "../../systems/props";
import type { PageProps } from "./types";

export function Page({ system }: PageProps) {
  const Datepicker = impl<DatepickerProps>(system, "datepicker");
  const [d, setD] = React.useState<Date | undefined>;
  return (
    <>
      <Master note="공식에는 DatePicker 라는 컴포넌트가 없어요. Popover 와 Calendar 를 엮은 거예요.">
        <Datepicker value={d} onValueChange={setD} />
      </Master>

      <Kids axis="state" title="State" note="고른 날이 방아쇠에 그대로 보여요. '날짜 고르기'만 남으면 골랐는지 알 수 없어요.">
        <Kid label="아직 안 고름">
          <Datepicker placeholder="날짜를 골라 주세요" />
        </Kid>
        <Kid label="고른 뒤">
          <Datepicker value={new Date(2026, 7, 16)} />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "루트 컴포넌트", then: <><b>없어요.</b> Popover + Calendar 조합이에요 (공식 명시).</> },
  { when: "표기", then: <>줄이지 마세요. <code>8/9</code> 는 지역마다 다르게 읽혀요.</> },
  { when: "먼 날짜일 때", then: <>치는 필드를 함께 주세요. 달을 수십 번 넘기게 두지 않아요.</> },
];
