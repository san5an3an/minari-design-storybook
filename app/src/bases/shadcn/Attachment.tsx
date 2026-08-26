import type { CSSProperties } from "react";
import {
  Attachment as ShadcnAttachment, AttachmentAction, AttachmentActions,
  AttachmentContent, AttachmentDescription, AttachmentGroup, AttachmentMedia,
  AttachmentTitle, AttachmentTrigger,
} from "@/components/ui/attachment";
import type { AttachmentImpl, AttachmentProps } from "../../systems/props";

const SURFACE = {
  "--card": "var(--component-attachment-bg)",
  "--muted": "var(--component-attachment-media-bg)",
} as CSSProperties;

function AttachmentRoot({ style, children, ...rest }: AttachmentProps) {
  return (
    <ShadcnAttachment style={{ ...SURFACE, ...style }} {...rest}>
      {children}
    </ShadcnAttachment>
  );
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
