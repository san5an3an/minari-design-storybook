import { Button, Input, Space, Typography } from "antd";
import type { InputgroupImpl, InputgroupProps } from "../../systems/props";

function InputgroupRoot({
  prefix, suffix, multiline, blockStart, blockEnd, className, children, ...rest
}: InputgroupProps) {
  // TextArea는 textarea 속성 사용, 타입만 좁혀 전달하고 런타임은 그대로임
  const field = multiline ? (
    <Input.TextArea {...(rest as React.ComponentProps<typeof Input.TextArea>)} />
  ) : (
    <Input prefix={prefix} suffix={suffix} {...rest} />
  );

  return (
    <Space.Compact className={className} block>
      {blockStart}
      {children ?? field}
      {blockEnd}
    </Space.Compact>
  );
}

export const Inputgroup = Object.assign(InputgroupRoot, {
  Text: Typography.Text,
  Button,
}) as unknown as InputgroupImpl;
