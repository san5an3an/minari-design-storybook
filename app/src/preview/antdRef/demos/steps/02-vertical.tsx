// @ts-nocheck
import React from 'react';
import { Flex, Steps } from 'antd';

const content = '내용이 들어가는 자리예요.';

const items = [
  {
    title: '끝남',
    content,
  },
  {
    title: '진행 중',
    content,
  },
  {
    title: '기다리는 중',
    content,
  },
];

const App: React.FC = () => (
  <Flex>
    <div style={{ flex: 1 }}>
      <Steps orientation="vertical" current={1} items={items} />
    </div>
    <div style={{ flex: 1 }}>
      <Steps orientation="vertical" current={1} items={items} size="small" />
    </div>
  </Flex>
);

export default App;