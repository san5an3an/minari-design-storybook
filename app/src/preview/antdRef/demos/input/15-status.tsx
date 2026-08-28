// @ts-nocheck
import React from 'react';
import ClockCircleOutlined from '@ant-design/icons/ClockCircleOutlined';
import { Input, Space } from 'antd';

const App: React.FC = () => (
  <Space vertical style={{ width: '100%' }}>
    <Input status="error" placeholder="오류" />
    <Input status="warning" placeholder="경고" />
    <Input status="error" prefix={<ClockCircleOutlined />} placeholder="앞 장식이 있는 오류" />
    <Input status="warning" prefix={<ClockCircleOutlined />} placeholder="앞 장식이 있는 경고" />
  </Space>
);

export default App;