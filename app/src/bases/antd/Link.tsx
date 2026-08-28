import { Typography } from "antd";
import type { LinkProps } from "../../systems/props";

export function Link({ href, external, children, className }: LinkProps) {
  return (
    <Typography.Link
      className={className}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
    >
      {children}
    </Typography.Link>
  );
}
