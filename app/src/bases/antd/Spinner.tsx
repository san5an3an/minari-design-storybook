import { Spin } from "antd";
import type { SpinnerProps } from "../../systems/props";

export function Spinner({ label }: SpinnerProps) {
  return (
    <Spin
      // 텍스트 없을 때 표시만으로 로딩 상태 전달
      aria-label={label === undefined ? "불러오는 중" : undefined}
      description={label}
    />
  );
}
