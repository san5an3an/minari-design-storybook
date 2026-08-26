import React from 'react';
import { DownOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Dropdown, Space } from 'antd';

const items: MenuProps['items'] = [
  {
    key: '1',
    type: 'group',
    label: '묶음 제목',
    children: [
      {
        key: '1-1',
        label: '첫 번째 메뉴 항목',
      },
      {
        key: '1-2',
        label: '두 번째 메뉴 항목',
      },
    ],
  },
  {
    key: '2',
    label: '하위 메뉴',
    children: [
      {
        key: '2-1',
        label: '세 번째 메뉴 항목',
      },
      {
        key: '2-2',
        label: '4th menu item',
      },
    ],
  },
  {
    key: '3',
    label: '못 쓰는 하위 메뉴',
    disabled: true,
    children: [
      {
        key: '3-1',
        label: '5d menu item',
      },
      {
        key: '3-2',
        label: '6th menu item',
      },
    ],
  },
];

const App: React.FC = () => (
  <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        이어지는 메뉴
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default App;