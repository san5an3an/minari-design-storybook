import * as React from "react";
import { cx } from "./cx";

export type CarouselOrientation = "horizontal" | "vertical";

export interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  // 미는 방향
  orientation?: CarouselOrientation;
}

export const Carousel = React.forwardRef<HTMLDivElement, CarouselProps>(
  ({ orientation = "horizontal", children, className, ...rest }, ref) => (
    <div role="region" aria-roledescription="carousel"
      className={cx("ods-carousel", `ods-carousel--${orientation}`, className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Carousel.displayName = "Carousel";

// 줄 자체, 넘치는 부분 제외
export const CarouselContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-carousel-content", className)} {...rest}>
      {children}
    </div>
  )
);
CarouselContent.displayName = "CarouselContent";

// 셀 하나, role="group" 지정
export const CarouselItem = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-carousel-item", className)} {...rest}>
      {children}
    </div>
  )
);
CarouselItem.displayName = "CarouselItem";

// 이전 슬라이드로 전환
export const CarouselPrevious = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-carousel-previous", className)} {...rest}>
      {children}
    </button>
  )
);
CarouselPrevious.displayName = "CarouselPrevious";

// 뒤로 이동. 이전이 없으면 동작하지 않음
export const CarouselNext = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, children, ...rest }, ref) => (
    <button ref={ref} className={cx("ods-carousel-next", className)} {...rest}>
      {children}
    </button>
  )
);
CarouselNext.displayName = "CarouselNext";
