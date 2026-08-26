import React from 'react';
import { Flex, Mentions } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <Mentions placeholder="테두리" />
    <Mentions placeholder="채움" variant="filled" />
    <Mentions placeholder="테두리 없음" variant="borderless" />
    <Mentions placeholder="밑줄" variant="underlined" />
  </Flex>
);

export default App;