import React from 'react';
import { Flex, Radio } from 'antd';
import type { CheckboxGroupProps } from 'antd/es/checkbox';

const options: CheckboxGroupProps<string>['options'] = [
  { label: '사과', value: '사과' },
  { label: '배', value: '배' },
  { label: '오렌지', value: '오렌지' },
];

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Radio.Group block options={options} defaultValue="사과" />
    <Radio.Group
      block
      options={options}
      defaultValue="사과"
      optionType="button"
      buttonStyle="solid"
    />
    <Radio.Group block options={options} defaultValue="배" optionType="button" />
  </Flex>
);

export default App;