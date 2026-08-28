// @ts-nocheck
import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    icon: <MailOutlined />,
    label: '메뉴 하나',
    children: [
      {
        key: '1-1',
        label: '항목 1',
        type: 'group',
        children: [
          { key: '1', label: '선택지 1' },
          { key: '2', label: '선택지 2' },
        ],
      },
      {
        key: '1-2',
        label: '항목 2',
        type: 'group',
        children: [
          { key: '3', label: '선택지 3' },
          { key: '4', label: '항목 4' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    icon: <AppstoreOutlined />,
    label: '메뉴 둘',
    children: [
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
    key: 'sub4',
    label: '메뉴 셋',
    icon: <SettingOutlined />, children: [
      { key: '9', label: '항목 9' },
      { key: '10', label: '항목 10' },
      { key: '11', label: '항목 11' },
      { key: '12', label: '항목 12' },
    ],
  },
];

const onClick: MenuProps['onClick'] = (e) => {
  console.log('click', e);
};

const App: React.FC = () => (
  <Menu onClick={onClick} style={{ width: 256 }} mode="vertical" items={items} />
);

export default App;