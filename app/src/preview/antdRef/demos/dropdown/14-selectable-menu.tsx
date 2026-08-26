import React from 'react';
import { DownOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space, Typography } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '항목 1',
  },
  {
    key: '2',
    label: '항목 2',
  },
  {
    key: '3',
    label: '항목 3',
  },
];

const App: React.FC = () => (
  <Dropdown
    menu={{
      items,
      selectable: true,
      defaultSelectedKeys: ['3'],
    }}
  >
    <Typography.Link>
      <Space>
        고를 수 있음
        <DownOutlined />
      </Space>
    </Typography.Link>
  </Dropdown>
);

export default App;