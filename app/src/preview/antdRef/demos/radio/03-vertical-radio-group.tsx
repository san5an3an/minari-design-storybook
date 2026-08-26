/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/radio.json 의 examples[3] ("Vertical Radio.Group")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import type { RadioChangeEvent, RadioGroupProps } from 'antd';
import { Flex, Input, Radio } from 'antd';

const labelStyle: React.CSSProperties = {
  height: 32,
  lineHeight: '32px',
};

const buttonOptions: RadioGroupProps['options'] = [
  { label: '사과', value: '사과', className: 'label-1' },
  { label: '배', value: '배', className: 'label-2' },
  { label: '오렌지', value: '오렌지', title: '오렌지', className: 'label-3' },
];

const App: React.FC = () => {
  const [value, setValue] = useState(1);

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Flex align="start" gap="large">
      <div style={{ flex: 1 }}>
        <Radio.Group
          vertical
          onChange={onChange}
          value={value}
          options={[
            { value: 1, style: labelStyle, label: '항목 A' },
            { value: 2, style: labelStyle, label: '항목 B' },
            { value: 3, style: labelStyle, label: '항목 C' },
            {
              value: 4,
              style: labelStyle,
              label: (
                <>
                  더 보기…
                  {value === 4 && (
                    <Input
                      variant="filled"
                      placeholder="넣어 주세요"
                      style={{ width: 120, marginInlineStart: 12 }}
                    />
                  )}
                </>
              ),
            },
          ]}
        />
      </div>
      <div style={{ flex: 1 }}>
        <Radio.Group options={buttonOptions} optionType="button" vertical />
      </div>
    </Flex>
  );
};

export default App;