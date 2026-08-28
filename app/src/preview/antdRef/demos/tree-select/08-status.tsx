// @ts-nocheck
import React from 'react';
import { Space, TreeSelect } from 'antd';

const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <TreeSelect status="error" style={{ width: '100%' }} placeholder="오류" />
    <TreeSelect
      status="warning"
      style={{ width: '100%' }}
      multiple
      placeholder="경고 여럿"
    />
  </Space>
);

export default App;