import React from 'react';
import { Cascader, Space } from 'antd';

const App: React.FC = () => (
  <Space vertical>
    <Cascader status="error" placeholder="오류" />
    <Cascader status="warning" multiple placeholder="경고 여럿" />
  </Space>
);

export default App;