import { cx } from "../cx";
import type { AspectratioProps } from "../../systems/props";

// 계약이 이름 붙인 비율. 이 셋만 정적 CSS 값으로 존재
const NAMED = ["square", "video", "portrait"];

export function Aspectratio({ ratio = "video", children, className, style }: AspectratioProps) {
  const named = typeof ratio === "string" && NAMED.includes(ratio);
  return (
    <div
      className={cx("ods-aspectratio", named && `ods-aspectratio--${ratio}`, className)}
      // 이름 아닐 때만 인라인 값 전달. 함께 주면 시스템 값 변경에 인라인이 따라가지 않음
      style={named ? style : { aspectRatio: String(ratio), ...style }}
    >
      {children}
    </div>
  );
}
