import type * as React from "react";
import {
  Bubble as ShadcnBubble, BubbleContent as ShadcnBubbleContent, BubbleGroup as ShadcnBubbleGroup,
  BubbleReactions as ShadcnBubbleReactions,
} from "@/components/ui/bubble";
import { cn } from "@/lib/utils";
import type { BubbleImpl, BubbleProps } from "../../systems/props";

// 치수는 클래스로 연결. ghost 변형은 부모의 *:data-[slot=bubble-content]:p-0 rounded-none 명시도가 더 높아 그대로 유지됨
function BubbleRoot({ variant, children, className, ...rest }: BubbleProps & { className?: string }) {
  return (
    <ShadcnBubble variant={variant as never} className={cn("gap-(--component-bubble-gap)", className)} {...rest}>
      {children}
    </ShadcnBubble>
  );
}

function BubbleContent({ className, ...rest }: React.ComponentProps<typeof ShadcnBubbleContent>) {
  return (
    <ShadcnBubbleContent
      className={cn(
        "rounded-(--component-bubble-radius) px-(--component-bubble-padding-inline) py-(--component-bubble-padding-block)",
        className,
      )}
      {...rest}
    />
  );
}

function BubbleGroup({ className, ...rest }: React.ComponentProps<typeof ShadcnBubbleGroup>) {
  return <ShadcnBubbleGroup className={cn("gap-(--component-bubble-group-gap)", className)} {...rest} />;
}

// 버튼을 담은 반응은 shadcn 의 has-[button]:p-0 유지. 그 규칙이 이 클래스보다 강함
function BubbleReactions({ className, ...rest }: React.ComponentProps<typeof ShadcnBubbleReactions>) {
  return (
    <ShadcnBubbleReactions
      className={cn(
        "gap-(--component-bubble-reactions-gap) px-(--component-bubble-reactions-padding-inline) py-(--component-bubble-reactions-padding-block)",
        className,
      )}
      {...rest}
    />
  );
}

export const Bubble = Object.assign(BubbleRoot, {
  Content: BubbleContent,
  Reactions: BubbleReactions,
  Group: BubbleGroup,
}) as unknown as BubbleImpl;
