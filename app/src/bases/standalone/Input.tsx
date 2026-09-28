import { useId } from "react";
import { cx } from "../cx";
import type { InputProps } from "../../systems/props";

export function Input({
  id,
  label,
  help,
  multiline,
  placeholder,
  defaultValue,
  disabled,
  className,
  "aria-invalid": ariaInvalid,
  // children 미지원. input 불가, textarea는 defaultValue 충돌
}: InputProps) {
  const autoId = useId;
  const framed = label !== undefined || help !== undefined;
  // 컨테이너 렌더링될 때만 id 부여, 단독 렌더링 셀은 id 생략
  const inputId = id ?? (framed ? autoId : undefined);

  const shared = {
    id: inputId,
    className: cx("ods-input", className),
    placeholder,
    defaultValue,
    disabled,
    "aria-invalid": ariaInvalid,
  };
  const control = multiline ? <textarea {...shared} /> : <input {...shared} />;

  if (!framed) return control;

  return (
    <div className="ods-field">
      {label !== undefined && <label htmlFor={inputId}>{label}</label>}
      {control}
      {/* 오류 문구도 같은 위치 사용. 새 줄에 넣으면 화면이 흔들리는 문제가 있음 */}
      {help !== undefined && <span className="ods-input-help">{help}</span>}
    </div>
  );
}
