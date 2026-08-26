import * as React from "react";
import { cx } from "./cx";

export interface BannerProps extends React.HTMLAttributes<HTMLDivElement> {
  // 시선 분산 완화용 옅은 배경
  soft?: boolean;
}

export const Banner = React.forwardRef<HTMLDivElement, BannerProps>(
  ({ soft = false, children, className, ...rest }, ref) => (
    <div
      className={cx("ods-banner", soft && "ods-banner--soft", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Banner.displayName = "Banner";

// 제목
export const BannerTitle = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-banner-title", className)} {...rest}>
      {children}
    </div>
  )
);
BannerTitle.displayName = "BannerTitle";

// 본문
export const BannerBody = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-banner-body", className)} {...rest}>
      {children}
    </div>
  )
);
BannerBody.displayName = "BannerBody";

// 동작 위치
export const BannerActions = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-banner-actions", className)} {...rest}>
      {children}
    </div>
  )
);
BannerActions.displayName = "BannerActions";
