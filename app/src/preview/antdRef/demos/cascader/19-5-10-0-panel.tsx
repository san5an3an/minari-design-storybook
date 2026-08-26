import React, { useState } from 'react';
import type { CascaderProps } from 'antd';
import { Cascader, Flex, Switch } from 'antd';

interface Option {
  value: string | number;
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
        children: [
          {
            value: 'xihu',
            label: '한강공원',
          },
        ],
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
        children: [
          {
            value: 'zhonghuamen',
            label: '광화문',
          },
        ],
      },
    ],
  },
];

const onChange: CascaderProps<Option>['onChange'] = (value) => {
  console.log(value);
};

const onMultipleChange: CascaderProps<Option, 'value', true>['onChange'] = (value) => {
  console.log(value);
};

const App: React.FC = () => {
  const [disabled, setDisabled] = useState(false);

  return (
    <Flex vertical gap="small" align="flex-start">
      <Switch
        checked={disabled}
        checkedChildren="쓸 수 있음"
        unCheckedChildren="못 씀"
        onChange={setDisabled}
        aria-label="못 쓰는 스위치"
      />
      <Cascader.Panel options={options} onChange={onChange} disabled={disabled} />
      <Cascader.Panel multiple options={options} onChange={onMultipleChange} disabled={disabled} />
      <Cascader.Panel />
    </Flex>
  );
};

export default App;