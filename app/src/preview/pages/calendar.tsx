import * as React from "react";
import { Kid, Kids, Master, impl } from "../Doc";
import type { Condition } from "../PropsTable";
import type { CalendarProps } from "../../systems/props";
import type { PageProps } from "./types";

// 오늘 기준 앞뒤로 날짜 범위 확장. 연도 고정 시 전환 시점에 오류가 있음
const YEAR = new Date.getFullYear;

export function Page({ system }: PageProps) {
  const Calendar = impl<CalendarProps>(system, "calendar");
  const [d, setD] = React.useState<Date | undefined>(new Date(2026, 7, 16));
  return (
    <>
      <Master note="요일과 앞뒤 관계를 보여 줘요. 그게 필요 없는 먼 날짜는 치는 편이 빨라요.">
        <Calendar className="rounded-lg border" mode="single" selected={d} onSelect={setD as never} />
      </Master>

      <Kids axis="mode" title="Variants" note="범위 고르기는 따로 있는 컴포넌트가 아니라 mode 값이에요.">
        <Kid label="single" hint="기본">
          <Calendar className="rounded-lg border" mode="single" />
        </Kid>
        <Kid label="range">
          <Calendar className="rounded-lg border" mode="range" />
        </Kid>
      </Kids>

      <Kids axis="captionLayout" title="Usage" note="달을 여러 번 넘겨야 하면 달 이름을 고를 수 있게 해요.">
        <Kid label="label" hint="기본">
          <Calendar className="rounded-lg border" />
        </Kid>
        <Kid label="dropdown">
          <Calendar
            className="rounded-lg border"
            captionLayout="dropdown"
            startMonth={new Date(YEAR - 100, 0)}
            endMonth={new Date(YEAR, 11)}
            reverseYears
          />
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "먼 날짜일 때", then: <>생년월일처럼 달을 수십 번 넘겨야 하면 <b>치는 필드</b>이 빨라요.</> },
  { when: "눌러서 띄울 때", then: <><b>DatePicker</b> 예요. 달력을 바로 펴 두는 게 이 페이지예요.</> },
  { when: "범위를 고를 때", then: <><code>mode=&quot;range&quot;</code> 예요. 별도 컴포넌트가 아니에요.</> },
];
