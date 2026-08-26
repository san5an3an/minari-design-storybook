import {
  Bubble as ShadcnBubble, BubbleContent, BubbleGroup, BubbleReactions,
} from "@/components/ui/bubble";
import type { BubbleImpl, BubbleProps } from "../../systems/props";

function BubbleRoot({ variant, children, ...rest }: BubbleProps) {
  return (
    <ShadcnBubble variant={variant as never} {...rest}>
      {children}
    </ShadcnBubble>
  );
}

export const Bubble = Object.assign(BubbleRoot, {
  Content: BubbleContent,
  Reactions: BubbleReactions,
  Group: BubbleGroup,
}) as unknown as BubbleImpl;
