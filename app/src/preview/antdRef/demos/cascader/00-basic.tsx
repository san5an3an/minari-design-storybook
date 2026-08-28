// @ts-nocheck
import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';
import type { HTMLAriaDataAttributes } from 'antd/es/_util/aria-data-attrs';

type Option = {
  value: string;
  label: string;
  children?: Option[];
} & HTMLAriaDataAttributes;

const options: Option[] = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    'aria-label': 'Zhejiang',
    'data-title': 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: '서울',
        'aria-label': '서울',
        'data-title': '서울',
        children: [
          {
            value: 'xihu',
            label: '한강공원',
            'aria-label': '한강공원',
            'data-title': '한강공원',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    'aria-label': 'Jiangsu',
    'data-title': 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: '대전',
        'aria-label': '대전',
        'data-title': '대전',
        children: [
          {
            value: 'zhonghuamen',
            label: '광화문',
            'aria-label': '광화문',
            'data-title': '광화문',
          },
        ],
      },
    ],
  },
];

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const App: React.FC = () => (
  <Cascader options={options} onChange={onChange} placeholder="골라 주세요" />
);

export default App;