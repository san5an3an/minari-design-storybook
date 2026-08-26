import * as React from "react";
import { cx } from "./cx";

export type MeterProps = React.HTMLAttributes<HTMLDivElement>;

export const Meter = React.forwardRef<HTMLDivElement, MeterProps>(
  ({ children, className, ...rest }, ref) => (
    <div
      className={cx("ods-meter", className)}
      ref={ref}
      {...rest}
    >
      {children}
    </div>
  )
);
Meter.displayName = "Meter";

// 이름과 값이 놓이는 행
export const MeterHead = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-meter-head", className)} {...rest}>
      {children}
    </div>
  )
);
MeterHead.displayName = "MeterHead";

// 이름
export const MeterLabel = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-meter-label", className)} {...rest}>
      {children}
    </span>
  )
);
MeterLabel.displayName = "MeterLabel";

export const MeterValue = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-meter-value", className)} {...rest}>
      {children}
    </span>
  )
);
MeterValue.displayName = "MeterValue";

// 구간이 놓이는 바탕
export const MeterTrack = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...rest }, ref) => (
    <div ref={ref} className={cx("ods-meter-track", className)} {...rest}>
      {children}
    </div>
  )
);
MeterTrack.displayName = "MeterTrack";

export type MeterBandLevel = "low" | "mid" | "high";
export interface MeterBandProps extends React.HTMLAttributes<HTMLSpanElement> {
  // 저, 중, 고 구간
  level?: MeterBandLevel;
}
export const MeterBand = React.forwardRef<HTMLSpanElement, MeterBandProps>(
  ({ level, className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-meter-band", level && `ods-meter-band--${level}`, className)} {...rest}>
      {children}
    </span>
  )
);
MeterBand.displayName = "MeterBand";

// 지금 값의 위치
export const MeterMarker = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, children, ...rest }, ref) => (
    <span ref={ref} className={cx("ods-meter-marker", className)} {...rest}>
      {children}
    </span>
  )
);
MeterMarker.displayName = "MeterMarker";
