import { Progress as AntProgress } from "antd";
import type { ProgressProps } from "../../systems/props";

export function Progress({ value = 0, lg, indeterminate, showValue }: ProgressProps) {
  return (
    <AntProgress
      percent={indeterminate ? 0 : value}
      status={indeterminate ? "active" : "normal"}
      // 계약이 켜질 때만 숫자 표시
      showInfo={showValue === true && !indeterminate}
      size={lg ? "default" : "small"}
    />
  );
}
