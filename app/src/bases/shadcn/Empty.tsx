import {
  Empty as ShadcnEmpty, EmptyContent, EmptyDescription, EmptyHeader,
  EmptyMedia, EmptyTitle,
} from "@/components/ui/empty";
import type { EmptyImpl, EmptyProps } from "../../systems/props";

function EmptyRoot({ children, ...rest }: EmptyProps) {
  return <ShadcnEmpty {...rest}>{children}</ShadcnEmpty>;
}

export const Empty = Object.assign(EmptyRoot, {
  Header: EmptyHeader,
  Media: EmptyMedia,
  Title: EmptyTitle,
  Description: EmptyDescription,
  Content: EmptyContent,
}) as EmptyImpl;
