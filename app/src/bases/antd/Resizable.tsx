import { Splitter } from "antd";
import type { ResizableProps } from "../../systems/props";

export function Resizable({
  orientation = "horizontal", defaultSize, start, end, style, className,
}: ResizableProps) {
  return (
    <Splitter
      className={className}
      // 계약이 문자열이라 값이 늘 수 있음. 세로 값만 구분하고 나머지는 가로로 처리
      layout={orientation === "vertical" ? "vertical" : "horizontal"}
      // 크기, 위치는 호출부가 결정. 색, 모서리는 테마 담당이라 제외
      style={style}
    >
      {/* 크기는 앞쪽에만 지정. 둘 다 지정하면 자동 보정되어 값과 다르게 표시 */}
      <Splitter.Panel defaultSize={defaultSize}>{start}</Splitter.Panel>
      <Splitter.Panel>{end}</Splitter.Panel>
    </Splitter>
  );
}
