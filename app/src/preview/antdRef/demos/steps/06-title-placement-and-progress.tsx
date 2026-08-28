// @ts-nocheck
import React from 'react';
import { Steps } from 'antd';

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
  <>
    <Steps current={1} titlePlacement="vertical" items={items} ellipsis />
    <br />
    <Steps current={1} percent={60} titlePlacement="vertical" items={items} />
    <br />
    <Steps current={1} percent={80} size="small" titlePlacement="vertical" items={items} />
  </>
);

export default App;