import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { Kid, Kids, Master, compound } from "../Doc";
import type { Condition } from "../PropsTable";
import type { ChartImpl } from "../../systems/props";
import type { PageProps } from "./types";

const DATA = [
  { month: "1월", thisYear: 186, lastYear: 80 },
  { month: "2월", thisYear: 305, lastYear: 200 },
  { month: "3월", thisYear: 237, lastYear: 120 },
  { month: "4월", thisYear: 73, lastYear: 190 },
  { month: "5월", thisYear: 209, lastYear: 130 },
  { month: "6월", thisYear: 214, lastYear: 140 },
];

const CONFIG = {
  thisYear: { label: "올해", color: "var(--component-chart-series-1)" },
  lastYear: { label: "지난해", color: "var(--component-chart-series-2)" },
};

export function Page({ system }: PageProps) {
  const Chart = compound<ChartImpl>(system, "chart");
  return (
    <>
      <Master note="그림은 그리는 라이브러리가 그려요. 이 컴포넌트가 갖는 건 계열 색·툴팁·라벨 셋뿐이에요. 높이를 안 주면 아무것도 안 그려져요.">
        <Chart config={CONFIG} className="min-h-[13rem] w-full">
          <BarChart accessibilityLayer data={DATA}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
            <Chart.Tooltip content={<Chart.TooltipContent />} />
            <Chart.Legend content={<Chart.LegendContent />} />
            <Bar dataKey="thisYear" fill="var(--color-thisYear)" radius={4} />
            <Bar dataKey="lastYear" fill="var(--color-lastYear)" radius={4} />
          </BarChart>
        </Chart>
      </Master>

      <Kids
        axis="parts"
        title="Tooltip · Legend"
        note="계열을 색으로만 구분하지 마세요. 라벨을 함께 두고, 셋을 넘으면 모양도 함께 구분해요."
      >
        <Kid label="툴팁만" hint="Tooltip">
          <Chart config={CONFIG} className="min-h-[10rem] w-full">
            <BarChart accessibilityLayer data={DATA}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <Chart.Tooltip content={<Chart.TooltipContent />} />
              <Bar dataKey="thisYear" fill="var(--color-thisYear)" radius={4} />
            </BarChart>
          </Chart>
        </Kid>
        <Kid label="라벨까지" hint="+ Legend">
          <Chart config={CONFIG} className="min-h-[10rem] w-full">
            <BarChart accessibilityLayer data={DATA}>
              <CartesianGrid vertical={false} />
              <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} />
              <Chart.Tooltip content={<Chart.TooltipContent />} />
              <Chart.Legend content={<Chart.LegendContent />} />
              <Bar dataKey="thisYear" fill="var(--color-thisYear)" radius={4} />
              <Bar dataKey="lastYear" fill="var(--color-lastYear)" radius={4} />
            </BarChart>
          </Chart>
        </Kid>
      </Kids>
    </>
  );
}

export const conditions: readonly Condition[] = [
  { when: "계열을 나눌 때", then: <>색으로만 하지 마세요. <b>라벨</b>를 함께 둬요.</> },
  { when: "계열이 넷 이상", then: <>모양(점·선꼴)도 함께 갈라요.</> },
  { when: "중요한 수", then: <>표로도 둬요. 짚어야만 알 수 있는 그림은 반쪽이에요.</> },
  { when: "높이를 안 줬을 때", then: <>아무것도 안 그려져요. <code>min-h-*</code> 를 주세요.</> },
  { when: "그림을 직접 그리고 싶을 때", then: <>그리는 라이브러리의 일이에요. 이 컴포넌트의 층은 색과 셸이에요.</> },
];
