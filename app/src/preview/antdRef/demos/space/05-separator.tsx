import React from 'react';
import { Divider, Space, Typography } from 'antd';

const App: React.FC = () => (
  <Space separator={<Divider vertical />}>
    <Typography.Link>링크</Typography.Link>
    <Typography.Link>링크</Typography.Link>
    <Typography.Link>링크</Typography.Link>
  </Space>
);

export default App;