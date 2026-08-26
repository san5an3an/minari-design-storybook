import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';

interface Option {
  value: string;
  label: string;
  children?: Option[];
}

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: '서울',
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: '대전',
      },
    ],
  },
];

const App: React.FC = () => {
  const [text, setText] = useState('고르기 풀기');

  const onChange: CascaderProps<Option>['onChange'] = (_, selectedOptions) => {
    setText(selectedOptions.map((o) => o.label).join(', '));
  };

  return (
    <span>
      {text}
      &nbsp;
      <Cascader options={options} onChange={onChange}>
        <a>도시 바꾸기</a>
      </Cascader>
    </span>
  );
};

export default App;