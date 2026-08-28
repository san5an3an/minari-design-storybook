// @ts-nocheck
import React from 'react';
import { Card, List } from 'antd';

const data = [
  {
    title: '제목 1',
  },
  {
    title: '제목 2',
  },
  {
    title: '제목 3',
  },
  {
    title: '제목 4',
  },
];

const App: React.FC = () => (
  <List
    grid={{ gutter: 16, column: 4 }}
    dataSource={data}
    renderItem={(item) => (
      <List.Item>
        <Card title={item.title}>카드 내용</Card>
      </List.Item>
    )}
  />
);

export default App;