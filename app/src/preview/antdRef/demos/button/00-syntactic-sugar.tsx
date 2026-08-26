import React from 'react';
import { Button, Flex } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Button type="primary">기본 버튼</Button>
    <Button>기본 버튼</Button>
    <Button type="dashed">파선 버튼</Button>
    <Button type="text">글자 버튼</Button>
    <Button type="link">링크 버튼</Button>
  </Flex>
);

export default App;