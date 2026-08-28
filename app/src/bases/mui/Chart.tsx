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
  Style: ChartStyle,
}) as unknown as ChartImpl;
