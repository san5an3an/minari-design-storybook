import { ScrollArea as ShadcnScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import type { ScrollareaProps } from "../../systems/props";

export function Scrollarea({
  orientation = "vertical", children, className, style, ...rest
}: ScrollareaProps) {
  return (
    <ShadcnScrollArea className={className} style={style} {...rest}>
      {children}
      {orientation === "horizontal" ? <ScrollBar orientation="horizontal" /> : null}
    </ShadcnScrollArea>
  );
}
