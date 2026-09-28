/* 손으로 채운 예제 — `_overrides/` 라 생성기가 덮지 않는다.
 *
 * ⚠️ **까닭은 옆의 `radio-button__size-radio-buttons.tsx` 와 같다.** 공식 원본이
 *    `inputProps` 를 쓰는데 `@mui/material` 9.3.1 의 `Radio` 에는 그 prop 이 없어,
 *    그대로 심으면 DOM 에 `inputprops="[object Object]"` 로 새고 **의도한 `aria-label`
 *    이 사라진다.** 두 예제가 같은 `controlProps` 꼴을 쓰므로 같이 걸린다
 *    (화면 실측 2026-09-02 — 두 예제 합쳐 8개 라디오가 접근 이름을 잃고 있었다).
 *
 * ⚠️ **본문은 공식 원본 그대로다.** 바꾼 것은 딱 한 줄 —
 *      inputProps: { 'aria-label': item }
 *      slotProps: { input: { 'aria-label': item } }
 *
 * ⚠️ **공식이 예제를 고치면 이 파일을 지운다.** 자세한 근거·실측·폐기 조건은
 *    `radio-button__size-radio-buttons.tsx` 헤더에 **한 번만** 적어 두었다 — 두 곳에 같은
 *    설명을 두면 한쪽만 낡는다. ("옆 파일" 이라고만 쓰면 옮기거나 이름이 바뀔 때
 *    아무 데도 안 가리킨다.)
 *    ⚠️ 다만 아래 **표식은 이 파일에도 있어야 한다.** 설명이 아니라 생성기가 읽는
 *       조건이고, 예제마다 원본이 달라 파일별로 붙는다 — 중복된 설명이 아니다.
 *
 *      @upstream-marker `inputProps: { 'aria-label': item }`
 */
import * as React from 'react';
import { pink } from '@mui/material/colors';
import Radio from '@mui/material/Radio';

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'color-radio-button-demo',
    slotProps: { input: { 'aria-label': item } },
  });

  return (
    <div>
      <Radio {...controlProps('a')} />
      <Radio {...controlProps('b')} color="secondary" />
      <Radio {...controlProps('c')} color="success" />
      <Radio {...controlProps('d')} color="default" />
      <Radio
        {...controlProps('e')}
        sx={{
          color: pink[800],
          '&.Mui-checked': {
            color: pink[600],
          },
        }}
      />
    </div>
  );
}
