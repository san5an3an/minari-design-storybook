// @ts-nocheck
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: '선택지 1' },
  { key: '2', icon: <DesktopOutlined />, label: '선택지 2' },
  { key: '3', icon: <ContainerOutlined />, label: '선택지 3' },
  {
    key: 'sub1',
    label: '메뉴 하나',
    icon: <MailOutlined />, children: [
      { key: '5', label: '항목 5' },
      { key: '6', label: '항목 6' },
      { key: '7', label: '항목 7' },
      { key: '8', label: '항목 8' },
    ],
  },
  {
    key: 'sub2',
    label: '메뉴 둘',
    icon: <AppstoreOutlined />, children: [
      { key: '9', label: '항목 9' },
      { key: '10', label: '항목 10' },
      {
        key: 'sub3',
        label: '하위 메뉴',
        children: [
          { key: '11', label: '항목 11' },
          { key: '12', label: '항목 12' },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;