import React from 'react';
import { DownOutlined, SettingOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    label: '내 계정',
    disabled: true,
  },
  {
    type: 'divider',
  },
  {
    key: '2',
    label: '프로필',
    extra: '⌘P',
  },
  {
    key: '3',
    label: '청구',
    extra: '⌘B',
  },
  {
    key: '4',
    label: '설정',
    icon: <SettingOutlined />,
    extra: '⌘S',
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        여기에 올려 보세요
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;