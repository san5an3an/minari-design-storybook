// @ts-nocheck
import React from 'react';
import { Button, Space } from 'antd';

const App: React.FC = () => (
  <Space>
    <Space.Compact orientation="vertical">
      <Button>버튼 1</Button>
      <Button>버튼 2</Button>
      <Button>버튼 3</Button>
    </Space.Compact>
    <Space.Compact orientation="vertical">
      <Button type="dashed">버튼 1</Button>
      <Button type="dashed">버튼 2</Button>
      <Button type="dashed">버튼 3</Button>
    </Space.Compact>
    <Space.Compact orientation="vertical">
      <Button type="primary">버튼 1</Button>
      <Button type="primary">버튼 2</Button>
      <Button type="primary">버튼 3</Button>
    </Space.Compact>
    <Space.Compact orientation="vertical">
      <Button variant="outlined">버튼 1</Button>
      <Button variant="outlined">버튼 2</Button>
      <Button variant="outlined">버튼 3</Button>
    </Space.Compact>
  </Space>
);

export default App;