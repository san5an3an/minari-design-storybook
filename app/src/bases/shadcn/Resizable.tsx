import {
  ResizableHandle, ResizablePanel, ResizablePanelGroup,
} from "@/components/ui/resizable";
import type { ResizableProps } from "../../systems/props";

const MIN = 12; // 0 도달 시 패널 복구 불가

export function Resizable({
  orientation = "horizontal", defaultSize = 40, minSize = MIN, withHandle = true,
  start, end, className, style,
}: ResizableProps) {
  return (
    <div style={style}>
      <ResizablePanelGroup
        orientation={orientation === "vertical" ? "vertical" : "horizontal"}
        className={className}
      >
        <ResizablePanel defaultSize={defaultSize} minSize={minSize}>
          {start}
        </ResizablePanel>
        <ResizableHandle withHandle={withHandle} />
        <ResizablePanel minSize={MIN}>{end}</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
