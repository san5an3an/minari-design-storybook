import * as React from "react";
import {
  InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot,
} from "@/components/ui/input-otp";
import type { InputotpProps } from "../../systems/props";

export function Inputotp({
  length = 6, groupSize = 3, value, defaultValue, onValueChange, className,
  onChange: _drop, ...rest
}: InputotpProps) {
  void _drop;
  // value 미지정 시 내부 상태로 자체 관리, 초기값은 defaultValue 사용
  const [inner, setInner] = React.useState(defaultValue ?? "");
  const groups: number[][] = [];
  for (let i = 0; i < length; i += groupSize) {
    groups.push(Array.from({ length: Math.min(groupSize, length - i) }, (_, k) => i + k));
  }
  return (
    <InputOTP
      maxLength={length}
      // defaultValue 전달 금지. controlled 전용이라 경고 위험 있음
      value={value ?? inner}
      // onChange는 이벤트 아닌 값 전달. onValueChange와 뜻이 같아 그대로 연결한 것임
      onChange={(v: string) => { if (value === undefined) setInner(v); onValueChange?.(v); }}
      containerClassName={className}
      {...rest}
    >
      {groups.map((g, gi) => (
        <React.Fragment key={g[0]}>
          {gi === 0 ? null : <InputOTPSeparator />}
          <InputOTPGroup>
            {g.map((i) => (
              <InputOTPSlot key={i} index={i} />
            ))}
          </InputOTPGroup>
        </React.Fragment>
      ))}
    </InputOTP>
  );
}
