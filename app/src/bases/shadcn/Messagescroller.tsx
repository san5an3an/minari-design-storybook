import {
  MessageScroller as ShadcnMessageScroller, MessageScrollerButton,
  MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import type { MessagescrollerImpl } from "../../systems/props";

export const Messagescroller = Object.assign(ShadcnMessageScroller, {
  Provider: MessageScrollerProvider,
  Viewport: MessageScrollerViewport,
  Content: MessageScrollerContent,
  Item: MessageScrollerItem,
  Button: MessageScrollerButton,
}) as unknown as MessagescrollerImpl;
