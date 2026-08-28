// @ts-nocheck
import React from 'react';
import { Flex, Mentions } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Mentions size="large" placeholder="큰 크기" />
    <Mentions placeholder="기본 크기" />
    <Mentions size="small" placeholder="작은 크기" />
  </Flex>
);

export default App;