// @ts-nocheck
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
  disableCheckbox?: boolean;
}

const options: Option[] = [
  {
    label: '라이트',
    value: 'light',
    children: Array.from({ length: 20 }).map((_, index) => ({
      label: `번호 ${index}`,
      value: index,
    })),
  },
  {
    label: '하은',
    value: 'bamboo',
    children: [
      {
        label: '조금',
        value: 'little',
        children: [
          {
            label: '장난감 물고기',
            value: 'fish',
            disableCheckbox: true,
          },
          {
            label: '장난감 카드',
            value: 'cards',
          },
          {
            label: '장난감 새',
            value: 'bird',
          },
        ],
      },
    ],
  },
];

const onChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader
    style={{ width: '100%' }}
    options={options}
    onChange={onChange}
    multiple
    maxTagCount="responsive"
  />
);

export default App;