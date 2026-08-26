import {
  ButtonGroup, ButtonGroupSeparator, ButtonGroupText,
} from "@/components/ui/button-group";
import type { ToolbarImpl, ToolbarProps } from "../../systems/props";

function ToolbarRoot({ orientation = "horizontal", children, ...rest }: ToolbarProps) {
  return (
    <ButtonGroup orientation={orientation} {...rest}>
      {children}
    </ButtonGroup>
  );
}

export const Toolbar = Object.assign(ToolbarRoot, {
  Text: ButtonGroupText,
  Separator: ButtonGroupSeparator,
}) as ToolbarImpl;
