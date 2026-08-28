// @ts-nocheck
import React from 'react';
import { DownOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    label: (
      <a href="https://www.antgroup.com" target="_blank" rel="noopener noreferrer">
        첫 번째 메뉴 항목
      </a>
    ),
    key: '0',
  },
  {
    label: (
      <a href="https://www.aliyun.com" target="_blank" rel="noopener noreferrer">
        두 번째 메뉴 항목
      </a>
    ),
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '세 번째 메뉴 항목',
    key: '3',
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }} trigger={['click']}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        눌러 보세요
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;