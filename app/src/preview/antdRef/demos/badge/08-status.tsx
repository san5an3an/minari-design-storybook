import React from 'react';
import { Badge, Space } from 'antd';

const App: React.FC = () => (
  <>
    <Space>
      <Badge status="success" />
      <Badge status="error" />
      <Badge status="default" />
      <Badge status="processing" />
      <Badge status="warning" />
    </Space>
    <br />
    <Space vertical>
      <Badge status="success" text="성공" />
      <Badge status="error" text="오류" />
      <Badge status="default" text="기본값" />
      <Badge status="processing" text="처리 중" />
      <Badge status="warning" text="경고" />
    </Space>
  </>
);

export default App;