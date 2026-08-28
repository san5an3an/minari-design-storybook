// @ts-nocheck
import React from 'react';
import { Card, Space } from 'antd';

const App: React.FC = () => (
  <Space orientation="vertical" size="medium" style={{ display: 'flex' }}>
    <Card title="카드" size="small">
      <p>카드 내용</p>
      <p>카드 내용</p>
    </Card>
    <Card title="카드" size="small">
      <p>카드 내용</p>
      <p>카드 내용</p>
    </Card>
    <Card title="카드" size="small">
      <p>카드 내용</p>
      <p>카드 내용</p>
    </Card>
  </Space>
);

export default App;