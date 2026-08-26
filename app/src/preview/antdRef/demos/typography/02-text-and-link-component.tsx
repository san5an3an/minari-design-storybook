import React from 'react';
import { Space, Typography } from 'antd';

const { Text, Link } = Typography;

const App: React.FC = () => (
  <Space vertical>
    <Text>Ant Design (기본)</Text>
    <Text type="secondary">Ant Design (보조)</Text>
    <Text type="success">Ant Design (성공)</Text>
    <Text type="warning">Ant Design (경고)</Text>
    <Text type="danger">Ant Design (위험)</Text>
    <Text disabled>Ant Design (못 씀)</Text>
    <Text mark>Ant Design (형광펜)</Text>
    <Text code>Ant Design (코드)</Text>
    <Text keyboard>Ant Design (자판)</Text>
    <Text underline>Ant Design (밑줄)</Text>
    <Text delete>Ant Design (지움)</Text>
    <Text strong>Ant Design (굵게)</Text>
    <Text italic>Ant Design (기울임)</Text>
    <Link href="https://ant.design" target="_blank">
      Ant Design (링크)
    </Link>
  </Space>
);

export default App;