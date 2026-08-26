import React from 'react';
import type { CascaderProps } from 'antd';
import { Cascader } from 'antd';

interface Option {
  code: string;
  name: string;
  items?: Option[];
}

const options: Option[] = [
  {
    code: 'zhejiang',
    name: 'Zhejiang',
    items: [
      {
        code: 'hangzhou',
        name: '서울',
        items: [
          {
            code: 'xihu',
            name: '한강공원',
          },
        ],
      },
    ],
  },
  {
    code: 'jiangsu',
    name: 'Jiangsu',
    items: [
      {
        code: 'nanjing',
        name: '대전',
        items: [
          {
            code: 'zhonghuamen',
            name: '광화문',
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
  <Cascader
    fieldNames={{ label: 'name', value: 'code', children: 'items' }}
    options={options}
    onChange={onChange}
    placeholder="골라 주세요"
  />
);

export default App;