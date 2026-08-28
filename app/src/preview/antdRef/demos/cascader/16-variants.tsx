// @ts-nocheck
import React from 'react';
import { Cascader, Flex } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Cascader placeholder="골라 주세요" variant="borderless" />
    <Cascader placeholder="골라 주세요" variant="filled" />
    <Cascader placeholder="골라 주세요" variant="outlined" />
    <Cascader placeholder="골라 주세요" variant="underlined" />
  </Flex>
);

export default App;