import React from 'react';
import { Flex, Progress } from 'antd';

const App: React.FC = () => (
  <Flex gap="small" wrap>
    <Progress type="circle" percent={75} format={(percent) => `${percent}일`} />
    <Progress type="circle" percent={100} format={() => '완료'} />
  </Flex>
);

export default App;