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
    subTitle: '남은 시간 00:00:08',
  },
  {
    title: '기다리는 중',
    content,
  },
];

const App: React.FC = () => (
  <Flex vertical gap="large">
    <Steps current={1} items={items} />
    <Steps current={1} items={items} variant="outlined" />
    <Steps current={1} items={items} size="small" />
    <Steps current={1} items={items} size="small" variant="outlined" />
  </Flex>
);

export default App;