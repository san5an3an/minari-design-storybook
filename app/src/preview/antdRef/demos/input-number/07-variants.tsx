import React from 'react';
import { Flex, InputNumber } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap={12}>
    <InputNumber placeholder="테두리" style={{ width: 200 }} />
    <InputNumber placeholder="채움" variant="filled" style={{ width: 200 }} />
    <InputNumber placeholder="테두리 없음" variant="borderless" style={{ width: 200 }} />
    <InputNumber placeholder="밑줄" variant="underlined" style={{ width: 200 }} />
  </Flex>
);

export default App;