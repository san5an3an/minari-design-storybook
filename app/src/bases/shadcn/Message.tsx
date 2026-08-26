import {
  Message as ShadcnMessage, MessageAvatar, MessageContent, MessageFooter,
  MessageGroup, MessageHeader,
} from "@/components/ui/message";
import type { MessageImpl, MessageProps } from "../../systems/props";

function MessageRoot({ children, ...rest }: MessageProps) {
  return <ShadcnMessage {...rest}>{children}</ShadcnMessage>;
}

export const Message = Object.assign(MessageRoot, {
  Group: MessageGroup,
  Avatar: MessageAvatar,
  Content: MessageContent,
  Header: MessageHeader,
  Footer: MessageFooter,
}) as unknown as MessageImpl;
