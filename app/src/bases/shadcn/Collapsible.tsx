import {
  Collapsible as ShadcnCollapsible, CollapsibleContent, CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import type {
  CollapsibleContentProps, CollapsibleImpl, CollapsibleProps, CollapsibleTriggerProps,
} from "../../systems/props";

function CollapsibleRoot({
  open, defaultOpen, onOpenChange, disabled, children, className,
}: CollapsibleProps) {
  return (
    <ShadcnCollapsible
      open={open}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
      disabled={disabled}
      className={className}
      // 배경 없으면 안 보이는 값. 배경 있으면 모서리 값 필요한 경우임
      style={{ borderRadius: "var(--component-collapsible-radius)" }}
    >
      {children}
    </ShadcnCollapsible>
  );
}

function Trigger({ render, children, className }: CollapsibleTriggerProps) {
  // 모서리 스타일은 버튼 소유. 버튼 아닌 요소에는 미적용
  const radius = { borderRadius: "var(--component-button-radius)" };
  return render ? (
    <CollapsibleTrigger render={render} className={className} style={radius} />
  ) : (
    <CollapsibleTrigger className={className} style={radius}>
      {children}
    </CollapsibleTrigger>
  );
}

function Content({ children, className }: CollapsibleContentProps) {
  return (
    <CollapsibleContent
      className={cn(
        // 높이만 줄이면 글자가 겹쳐 보임. 펼쳐도 자르기 선이 남아 있음
        "overflow-hidden",
        // 펼친 높이 측정값 적용. auto는 height 보간이 안 되는 문제가 있음
        "h-(--collapsible-panel-height) transition-[height] duration-200 ease-out",
        // 들어올 때와 나갈 때의 끝점. 없으면 시작과 끝이 같아 아무것도 안 움직임
        "data-starting-style:h-0 data-ending-style:h-0",
        className,
      )}
    >
      {children}
    </CollapsibleContent>
  );
}

export const Collapsible = Object.assign(CollapsibleRoot, {
  Trigger,
  Content,
}) as CollapsibleImpl;
