import {
  MessageScroller as ShadcnMessageScroller, MessageScrollerButton,
  MessageScrollerContent, MessageScrollerItem, MessageScrollerProvider,
  MessageScrollerViewport,
} from "@/components/ui/message-scroller";
import type { MessagescrollerImpl } from "../../systems/props";
import { withDims } from "./tone";

export const Messagescroller = Object.assign(ShadcnMessageScroller, {
  Provider: MessageScrollerProvider,
  Viewport: MessageScrollerViewport,
  Content: withDims(MessageScrollerContent, "gap-(--component-messagescroller-gap)"),
  Item: MessageScrollerItem,
  Button: withDims(MessageScrollerButton, "rounded-(--component-messagescroller-button-radius)"),
}) as unknown as MessagescrollerImpl;
