// @ts-nocheck
import React from 'react';
import { Card, Space } from 'antd';

const App: React.FC = () => (
  <Space vertical size={16}>
    <Card title="기본 크기 카드" extra={<a href="#">더 보기</a>} style={{ width: 300 }}>
      <p>카드 내용</p>
      <p>카드 내용</p>
      <p>카드 내용</p>
    </Card>
    <Card size="small" title="작은 크기 카드" extra={<a href="#">더 보기</a>} style={{ width: 300 }}>
      <p>카드 내용</p>
      <p>카드 내용</p>
      <p>카드 내용</p>
    </Card>
  </Space>
);

export default App;