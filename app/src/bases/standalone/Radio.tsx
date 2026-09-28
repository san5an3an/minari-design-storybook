import { createContext, useContext, useId, useState } from "react";
import { cx } from "../cx";
import type { RadioImpl, RadioProps } from "../../systems/props";

type GroupCtx = {
  name: string;
  value?: string;
  onPick?: (v: string) => void;
};
// 기본값 null로 지정, Group 밖 Radio 구분. 빈 객체면 그룹과 혼동
const Ctx = createContext<GroupCtx | null>(null);

function RadioRoot({
  id,
  value,
  disabled,
  description,
  children,
  className,
  "aria-invalid": ariaInvalid,
}: RadioProps) {
  const group = useContext(Ctx);
  const fallbackName = useId;

  return (
    <label className={cx("ods-radio", className)}>
      <input
        type="radio"
        id={id}
        name={group?.name ?? fallbackName}
        value={value}
        checked={group ? group.value === value : undefined}
        disabled={disabled}
        aria-invalid={ariaInvalid}
        onChange={group?.onPick ?  => group.onPick?.(value) : undefined}
        // Group 없으면 checked undefined로 비제어 처리. React 경고 방지임
      />
      <span className="ods-radio-mark" />
      <span>
        {children}
        {description !== undefined && (
          <span className="ods-radio-description">{description}</span>
        )}
      </span>
    </label>
  );
}

// 한 그룹. 같은 name을 쓰는 범위임
function Group({
  value,
  defaultValue,
  onValueChange,
  className,
  children,
}: {
  value?: string;
  defaultValue?: string;
  onValueChange?: (v: string) => void;
  className?: string;
  children?: React.ReactNode;
}) {
  const name = useId;
  const [inner, setInner] = useState(defaultValue);
  // value 전달 시 그 값 기준, 없으면 내부 상태 사용. 혼용하면 React가 경고하는 제약임
  const current = value !== undefined ? value : inner;

  return (
    <Ctx.Provider
      value={{
        name,
        value: current,
        onPick: (v) => {
          if (value === undefined) setInner(v);
          onValueChange?.(v);
        },
      }}
    >
      <div className={cx("ods-radio-group", className)}>{children}</div>
    </Ctx.Provider>
  );
}

export const Radio = Object.assign(RadioRoot, { Group }) as RadioImpl;
