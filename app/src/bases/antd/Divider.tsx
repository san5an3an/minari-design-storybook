import { Divider as AntDivider } from "antd";
import type { DividerProps } from "../../systems/props";

export function Divider({ vertical, label }: DividerProps) {
  return (
    <AntDivider orientation={vertical ? "vertical" : "horizontal"}>{label}</AntDivider>
  );
}
