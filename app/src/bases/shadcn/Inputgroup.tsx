import {
  InputGroup as ShadcnInputGroup, InputGroupAddon, InputGroupButton,
  InputGroupInput, InputGroupText, InputGroupTextarea,
} from "@/components/ui/input-group";
import type { InputgroupImpl, InputgroupProps } from "../../systems/props";

function InputgroupRoot({
  prefix, suffix, blockStart, blockEnd, multiline, className, style, ...rest
}: InputgroupProps) {
  const addon = (node: React.ReactNode, align: "inline-start" | "inline-end"
    | "block-start" | "block-end") =>
    node === undefined || node === null ? null : (
      <InputGroupAddon align={align}>{node}</InputGroupAddon>
    );
  return (
    <ShadcnInputGroup className={className} style={style}>
      {addon(blockStart, "block-start")}
      {addon(prefix, "inline-start")}
      {/* 여러 줄은 InputGroupTextarea 사용. 직접 그리면 포커스 끊김 위험 있음 */}
      {multiline
        ? <InputGroupTextarea {...(rest as React.ComponentProps<typeof InputGroupTextarea>)} />
        : <InputGroupInput {...rest} />}
      {addon(suffix, "inline-end")}
      {addon(blockEnd, "block-end")}
    </ShadcnInputGroup>
  );
}

function Text({ children }: { children?: React.ReactNode }) {
  return <InputGroupText>{children}</InputGroupText>;
}

function Button({ children, ...rest }: React.ComponentProps<"button"> & {
  variant?: string; size?: string;
}) {
  return (
    <InputGroupButton {...(rest as React.ComponentProps<typeof InputGroupButton>)}>
      {children}
    </InputGroupButton>
  );
}

export const Inputgroup = Object.assign(InputgroupRoot, { Text, Button }) as InputgroupImpl;
