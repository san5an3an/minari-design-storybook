import * as React from "react";
import { cx } from "./cx";

export type AttachmentState = "idle" | "uploading" | "processing" | "error" | "done";
export type AttachmentSize = "default" | "sm" | "xs";
export type AttachmentOrientation = "horizontal" | "vertical";

export interface AttachmentProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "size"> {
  // 현재 가능한 동작
  state?: AttachmentState;
  // 카드 크기
  size?: AttachmentSize;
  // 미리보기 배치 방향
  orientation?: AttachmentOrientation;
}

export const Attachment = React.forwardRef<HTMLDivElement, AttachmentProps>(
  ({ state = "done", size = "default", orientation = "horizontal", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-attachment", `ods-attachment--${state}`, `ods-attachment--size-${size}`, `ods-attachment--${orientation}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Attachment.displayName = "Attachment";

// 미리보기 영역
export type AttachmentMediaVariant = "icon" | "image";
export interface AttachmentMediaProps extends React.HTMLAttributes<HTMLDivElement> {
  // 표시인가 그림인가
  variant?: AttachmentMediaVariant;
}
export const AttachmentMedia = React.forwardRef<HTMLDivElement, AttachmentMediaProps>(
  ({ variant = "icon", className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-attachment-media", `ods-attachment-media--${variant}`, className)} {...rest}>
      {children}
    </div>
  )
);
AttachmentMedia.displayName = "AttachmentMedia";

// 이름과 설명 감싸기
export const AttachmentContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-attachment-content", className)} {...rest}>
      {children}
    </div>
  )
);
AttachmentContent.displayName = "AttachmentContent";

// 파일 이름
export const AttachmentTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-attachment-title", className)} {...rest}>
      {children}
    </p>
  )
);
AttachmentTitle.displayName = "AttachmentTitle";

// 종류, 크기, 상태
export const AttachmentDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, children, ...rest }, ref) => (
    <p ref={ref} className={cx("ods-attachment-description", className)} {...rest}>
      {children}
    </p>
  )
);
AttachmentDescription.displayName = "AttachmentDescription";

// 동작 위치. 끝쪽에 배치
export const AttachmentActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-attachment-actions", className)} {...rest}>
      {children}
    </div>
  )
);
AttachmentActions.displayName = "AttachmentActions";

export const AttachmentAction = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-attachment-action", className)} {...rest}>
      {children}
    </button>
  )
);
AttachmentAction.displayName = "AttachmentAction";

// 카드 전체가 여는 영역
export const AttachmentTrigger = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-attachment-trigger", className)} {...rest}>
      {children}
    </button>
  )
);
AttachmentTrigger.displayName = "AttachmentTrigger";

// 여러 항목 가로 배치
export const AttachmentGroup = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-attachment-group", className)} {...rest}>
      {children}
    </div>
  )
);
AttachmentGroup.displayName = "AttachmentGroup";
