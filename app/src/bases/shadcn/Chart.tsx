import {
  ChartContainer, ChartLegend, ChartLegendContent, ChartStyle, ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartImpl, ChartProps } from "../../systems/props";

function ChartRoot({ config, children, ...rest }: ChartProps) {
  return (
    <ChartContainer config={config as never} {...rest}>
      {children as never}
    </ChartContainer>
  );
}

export const Chart = Object.assign(ChartRoot, {
  Tooltip: ChartTooltip,
  TooltipContent: ChartTooltipContent,
  Legend: ChartLegend,
  LegendContent: ChartLegendContent,
  // 동일 색상값 재노출. 범례를 그림과 분리 배치하는 등 외부에서 필요할 때 쓰는 값임
  Style: ChartStyle,
}) as unknown as ChartImpl;
