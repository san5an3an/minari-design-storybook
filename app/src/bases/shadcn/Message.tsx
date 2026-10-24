import {
  Message as ShadcnMessage, MessageAvatar, MessageContent, MessageFooter,
  MessageGroup, MessageHeader,
} from "@/components/ui/message";
import { cn } from "@/lib/utils";
import type { MessageImpl, MessageProps } from "../../systems/props";
import { withDims } from "./tone";

function MessageRoot({ children, className, ...rest }: MessageProps & { className?: string }) {
  return <ShadcnMessage className={cn("gap-(--component-message-gap)", className)} {...rest}>{children}</ShadcnMessage>;
}

// Header, Footer 가로 여백 지정. ghost 말풍선은 shadcn 의 group-has-data-[variant=ghost]/message:px-0 이 더 강해 여백 0 이 유지됨
const META = "px-(--component-message-meta-padding-inline)";

export const Message = Object.assign(MessageRoot, {
  Group: withDims(MessageGroup, "gap-(--component-message-group-gap)"),
  Avatar: MessageAvatar,
  Content: withDims(MessageContent, "gap-(--component-message-stack-gap)"),
  Header: withDims(MessageHeader, META),
  Footer: withDims(MessageFooter, META),
}) as unknown as MessageImpl;
