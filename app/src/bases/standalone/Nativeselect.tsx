import type { ComponentProps } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "../cx";
import type { NativeselectImpl, NativeselectProps } from "../../systems/props";

function NativeselectRoot({ children, className, ...rest }: NativeselectProps) {
  return (
    <span className="ods-nativeselect-wrapper">
      <select className={cx("ods-nativeselect", className)} {...rest}>
        {children}
      </select>
      <span className="ods-nativeselect-icon">
        {/* 계약 표본과 동일한 구조. 크기, 색은 CSS로 제어 */}
        <ChevronDown aria-hidden="true" />
      </span>
    </span>
  );
}

// 안내 문구로 쓸 항목은 value 비우기
function Option({ children, className, ...rest }: ComponentProps<"option">) {
  return (
    <option className={cx("ods-nativeselect-option", className)} {...rest}>
      {children}
    </option>
  );
}

// 항목 그룹. 구분선 없이 이름 자체가 경계 역할
function OptGroup({ children, className, ...rest }: ComponentProps<"optgroup">) {
  return (
    <optgroup className={cx("ods-nativeselect-optgroup", className)} {...rest}>
      {children}
    </optgroup>
  );
}

// 프래그먼트 static 등록. 별도 export 시 생성기가 가져오지 못함
export const Nativeselect = Object.assign(NativeselectRoot, {
  Option,
  OptGroup,
}) as NativeselectImpl;
