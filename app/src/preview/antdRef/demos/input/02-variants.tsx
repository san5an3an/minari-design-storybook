// @ts-nocheck
import React from 'react';
import { Flex, Input } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Input placeholder="테두리" />
    <Input placeholder="채움" variant="filled" />
    <Input placeholder="테두리 없음" variant="borderless" />
    <Input placeholder="밑줄" variant="underlined" />
    <Input.Search placeholder="채움" variant="filled" />
  </Flex>
);

export default App;