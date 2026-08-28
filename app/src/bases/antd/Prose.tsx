import { Typography } from "antd";
import type { ProseProps } from "../../systems/props";

export function Prose({ children, className }: ProseProps) {
  return <Typography className={className}>{children}</Typography>;
}
