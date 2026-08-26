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