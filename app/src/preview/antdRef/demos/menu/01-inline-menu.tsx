import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '../_icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: '메뉴 하나',
    icon: <MailOutlined />, children: [
      {
        key: 'g1',
        label: '항목 1',
        type: 'group',
        children: [
          { key: '1', label: '항목 1' },
          { key: '2', label: '항목 2' },
        ],
      },
      {
        key: 'g2',
        label: '항목 2',
        type: 'group',
        children: [
          { key: '3', label: '항목 3' },
          { key: '4', label: '항목 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: '메뉴 둘',
    icon: <AppstoreOutlined />, children: [
      { key: '5', label: '항목 5' },
      { key: '6', label: '항목 6' },
      {
        key: 'sub3',
        label: '하위 메뉴',
        children: [
          { key: '7', label: '항목 7' },
          { key: '8', label: '항목 8' },
        ],
      },
    ],
  },
  {
    type: 'divider',
  },
  {
    key: 'sub4',
    label: '메뉴 셋',
    icon: <SettingOutlined />, children: [
      { key: '9', label: '항목 9' },
      { key: '10', label: '항목 10' },
      { key: '11', label: '항목 11' },
      { key: '12', label: '항목 12' },
    ],
  },
  {
    key: 'grp',
    label: '묶음',
    type: 'group',
    children: [
      { key: '13', label: '항목 13' },
      { key: '14', label: '항목 14' },
    ],
  },
];

const App: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: 256 }}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      items={items}
    />
  );
};

export default App;