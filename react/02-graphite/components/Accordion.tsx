import * as React from "react";
import { cx } from "./cx";

export type AccordionProps = React.HTMLAttributes<HTMLDivElement>;

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-accordion", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Accordion.displayName = "Accordion";

// 한 그룹
export const AccordionItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-accordion-item", className)} {...rest}>
      {children}
    </div>
  )
);
AccordionItem.displayName = "AccordionItem";

// 제목 행 전체를 클릭 영역으로 지정
export const AccordionHead = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-accordion-head", className)} {...rest}>
      {children}
    </button>
  )
);
AccordionHead.displayName = "AccordionHead";

// 펼침 표시
export const AccordionMarker = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-accordion-marker", className)} {...rest}>
      {children}
    </span>
  )
);
AccordionMarker.displayName = "AccordionMarker";

// 펼쳐지는 내용
export const AccordionBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-accordion-body", className)} {...rest}>
      {children}
    </div>
  )
);
AccordionBody.displayName = "AccordionBody";
