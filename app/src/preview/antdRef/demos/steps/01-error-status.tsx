// @ts-nocheck
import React from 'react';
import { Steps } from 'antd';

const content = '내용이에요';
const items = [
  {
    title: '끝남',
    content,
  },
  {
    title: '처리 중',
    content,
  },
  {
    title: '기다리는 중',
    content,
  },
];

const App: React.FC = () => <Steps current={1} status="error" items={items} />;

export default App;