// @ts-nocheck
import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Flex, Input } from 'antd';

const App: React.FC = () => (
  <Flex vertical gap="medium">
    <Input size="large" placeholder="큰 크기" prefix={<UserOutlined />} />
    <Input placeholder="기본 크기" prefix={<UserOutlined />} />
    <Input size="small" placeholder="작은 크기" prefix={<UserOutlined />} />
  </Flex>
);

export default App;