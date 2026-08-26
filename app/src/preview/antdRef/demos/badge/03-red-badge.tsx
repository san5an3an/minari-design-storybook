import React from 'react';
import { NotificationOutlined } from '../_icons';
import { Badge, Space } from 'antd';

const App: React.FC = () => (
  <Space>
    <Badge dot>
      <NotificationOutlined style={{ fontSize: 16 }} />
    </Badge>
    <Badge dot>
      <a href="#">뭔가에 링크 걸기</a>
    </Badge>
  </Space>
);

export default App;