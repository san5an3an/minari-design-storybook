import * as React from "react";
import { cx } from "./cx";

export interface RingcarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  // 셰이더 준비 전 상태
  busy?: "true" | "false";
}

export const Ringcarousel = React.forwardRef<HTMLDivElement, RingcarouselProps>(
  ({ busy = "false", children, className, ...rest }, ref) => (
    <div
      className={cx("ods-ringcarousel", className)}
      aria-busy={busy}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Ringcarousel.displayName = "Ringcarousel";

// WebGL 미지원 시 대체 렌더링 목록
export const RingCarouselFallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-ringcarousel-fallback", className)} {...rest}>
      {children}
    </div>
  )
);
RingCarouselFallback.displayName = "RingCarouselFallback";

// 직전 항목 이름
export const RingCarouselLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-ringcarousel-label", className)} {...rest}>
      {children}
    </span>
  )
);
RingCarouselLabel.displayName = "RingCarouselLabel";

// 현재 순서 / 전체 개수
export const RingCarouselIndex = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-ringcarousel-index", className)} {...rest}>
      {children}
    </span>
  )
);
RingCarouselIndex.displayName = "RingCarouselIndex";
