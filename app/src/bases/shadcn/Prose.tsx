import { cn } from "@/lib/utils";
import type { ProseProps } from "../../systems/props";

export function Prose({ children, className }: ProseProps) {
  return <div className={cn("ods-prose", className)}>{children}</div>;
}
