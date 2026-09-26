import {
  Empty as ShadcnEmpty, EmptyContent, EmptyDescription, EmptyHeader,
  EmptyMedia, EmptyTitle,
} from "@/components/ui/empty";
import { cn } from "@/lib/utils";
import type { EmptyImpl, EmptyProps } from "../../systems/props";
import { withDims } from "./tone";

function EmptyRoot({ children, className, ...rest }: EmptyProps & { className?: string }) {
  return (
    <ShadcnEmpty
      className={cn("gap-(--component-empty-gap) px-(--component-empty-padding-inline) py-(--component-empty-padding-block)", className)}
      {...rest}
    >
      {children}
    </ShadcnEmpty>
  );
}

export const Empty = Object.assign(EmptyRoot, {
  Header: EmptyHeader,
  Media: EmptyMedia,
  Title: EmptyTitle,
  Description: EmptyDescription,
  // 동작 줄 간격 지정. shadcn 원본 gap-2.5 를 대체함
  Content: withDims(EmptyContent, "gap-(--component-empty-actions-gap)"),
}) as EmptyImpl;
