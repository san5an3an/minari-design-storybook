import type * as React from "react";
import type { CSSProperties } from "react";
import {
  Attachment as ShadcnAttachment, AttachmentAction, AttachmentActions as ShadcnAttachmentActions,
  AttachmentContent, AttachmentDescription, AttachmentGroup as ShadcnAttachmentGroup,
  AttachmentMedia as ShadcnAttachmentMedia, AttachmentTitle, AttachmentTrigger,
} from "@/components/ui/attachment";
import { cn } from "@/lib/utils";
import type { AttachmentImpl, AttachmentProps } from "../../systems/props";

const SURFACE = {
  "--card": "var(--component-attachment-bg)",
  "--muted": "var(--component-attachment-media-bg)",
} as CSSProperties;

// 치수 토큰은 기본 크기에만 연결. 토큰에 크기 구분이 없어 sm, xs 는 shadcn 원본 크기를 유지함
// shadcn 의 has-data-[slot=attachment-content]:px-2.5 와 같은 선택자 모양으로 여백 지정. 명시도가 같아야 덮어쓸 수 있음
// 미디어만 있는 카드의 has-data-[slot=attachment-media]:p-2 는 원본 유지. 대응 토큰이 없음
const DEFAULT_DIMS =
  "gap-(--component-attachment-gap) rounded-(--component-attachment-radius) " +
  "has-data-[slot=attachment-content]:px-(--component-attachment-padding-inline) " +
  "has-data-[slot=attachment-content]:py-(--component-attachment-padding-block)";

function AttachmentRoot({ style, children, className, size, ...rest }: AttachmentProps & { className?: string }) {
  return (
    <ShadcnAttachment
      size={size as never}
      className={cn((size ?? "default") === "default" && DEFAULT_DIMS, className)}
      style={{ ...SURFACE, ...style }}
      {...rest}
    >
      {children}
    </ShadcnAttachment>
  );
}

// xs 모서리는 shadcn 의 group-data-[size=xs]:rounded-md 유지. 그 규칙이 더 강해 토큰이 덮지 않음
function AttachmentMedia({ className, ...rest }: React.ComponentProps<typeof ShadcnAttachmentMedia>) {
  return <ShadcnAttachmentMedia className={cn("rounded-(--component-attachment-media-radius)", className)} {...rest} />;
}

// 동작 영역 간격은 세로 카드에만 연결. 가로 카드는 버튼이 보통 하나라 shadcn 이 간격을 주지 않음
function AttachmentActions({ className, ...rest }: React.ComponentProps<typeof ShadcnAttachmentActions>) {
  return (
    <ShadcnAttachmentActions
      className={cn("group-data-[orientation=vertical]/attachment:gap-(--component-attachment-actions-gap)", className)}
      {...rest}
    />
  );
}

function AttachmentGroup({ className, ...rest }: React.ComponentProps<typeof ShadcnAttachmentGroup>) {
  return <ShadcnAttachmentGroup className={cn("gap-(--component-attachment-group-gap)", className)} {...rest} />;
}

export const Attachment = Object.assign(AttachmentRoot, {
  Media: AttachmentMedia,
  Content: AttachmentContent,
  Title: AttachmentTitle,
  Description: AttachmentDescription,
  Actions: AttachmentActions,
  Action: AttachmentAction,
  Trigger: AttachmentTrigger,
  Group: AttachmentGroup,
}) as unknown as AttachmentImpl;
