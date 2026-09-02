/* 손으로 채운 예제 — `_overrides/` 라 생성기가 덮지 않는다.
 *
 * ⚠️ **왜 손으로 채웠나.** 공식 원본이 `inputProps` 를 쓰는데 **우리가 설치한
 *    `@mui/material` 9.3.1 의 `Radio` 에는 그 prop 이 없다.** 그래서 그대로 심으면
 *    React 가 모르는 prop 으로 보고 DOM 까지 흘려보낸다 —
 *
 *      화면 실측 2026-09-02 (`#/mui/01-cobalt/radio-button`)
 *        inputprops="[object Object]" 로 새어 나온 요소   8개
 *        접근 이름(aria-label)이 사라진 라디오            8개
 *        console.error "React does not recognize the `inputProps` prop…"
 *
 *    콘솔 잡음이 아니라 **의도한 `aria-label` 이 실제로 없어진다.**
 *
 * ⚠️ **생성기의 첫 규칙("본문을 고치지 않는다")을 여기서 어긴 까닭.** 이 화면은 전시물이
 *    아니라 **베끼라고 있는 참조**다. 접근 이름이 사라진 예제를 그대로 세워 두면 베끼는
 *    사람이 그 결함을 **자기 코드로 옮긴다.** 원본에 충실한 것이 해를 끼치는 자리라
 *    뒤집는다 — 전시물이었다면 그대로 두는 쪽이 맞다.
 *
 * ⚠️ **이건 우리 잘못이 아니라 공식 문서 안의 불일치다.** 같은 ref(`v9.3.1`)에서 받은
 *    API 문서는 `Radio` 의 prop 으로 `slotProps: { input?, root? }` 만 싣고 `inputProps`
 *    는 아예 없다. 예제 소스만 옛 prop 에 남아 있다.
 *
 * ⚠️ **본문은 공식 원본 그대로다.** 바꾼 것은 딱 한 줄이다 —
 *      inputProps: { 'aria-label': item }
 *      slotProps: { input: { 'aria-label': item } }
 *    슬롯 이름 `input` 은 지어낸 것이 아니라 위 API 문서에 적힌 것이다.
 *
 * ⚠️ **공식이 예제를 고치면 이 파일을 지운다.** 다음 `fetch_mui_reference.py` 뒤에
 *    `demos/radio-button/04-size-radio-buttons.tsx` 가 `slotProps` 로 바뀌어 있으면
 *    override 를 둘 이유가 없다. 남겨 두면 그때부터는 이쪽이 낡은 사본이 된다.
 *    ⚠️ 그 조건은 **사람이 아니라 생성기가 확인한다.** 아래 표식의 글이 공식 원본에서
 *       사라지면 `gen_mui_demos.py` 가 알린다. 지킬 사람을 정하지 않은 조항은 아무도
 *       안 지킨다 — 글로만 적혀 있던 동안에는 확인하는 자리가 아예 없었다.
 *
 *      @upstream-marker `inputProps: { 'aria-label': item }`
 */
import * as React from 'react';
import Radio from '@mui/material/Radio';

export default function SizeRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState('a');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item: string) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: 'size-radio-button-demo',
    slotProps: { input: { 'aria-label': item } },
  });

  return (
    <div>
      <Radio {...controlProps('a')} size="small" />
      <Radio {...controlProps('b')} />
      <Radio
        {...controlProps('c')}
        sx={{
          '& .MuiSvgIcon-root': {
            fontSize: 28,
          },
        }}
      />
    </div>
  );
}
