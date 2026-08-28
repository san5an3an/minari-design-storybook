// @ts-nocheck
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';

const { SHOW_CHILD } = Cascader;

interface Option {
  value: string | number;
  label: string;
  children?: Option[];
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

const App: React.FC = () => {
  const onChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
    console.log(value);
  };
  return (
    <>
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        showCheckedStrategy={SHOW_CHILD}
        defaultValue={[
          ['bamboo', 'little', 'fish'],
          ['bamboo', 'little', 'cards'],
          ['bamboo', 'little', 'bird'],
        ]}
      />
      <br />
      <br />
      <Cascader
        style={{ width: '100%' }}
        options={options}
        onChange={onChange}
        multiple
        maxTagCount="responsive"
        defaultValue={[['bamboo']]}
      />
    </>
  );
};

export default App;