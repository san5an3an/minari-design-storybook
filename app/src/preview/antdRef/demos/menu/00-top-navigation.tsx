// @ts-nocheck
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    label: '메뉴 하나',
    key: 'mail',
    icon: <MailOutlined />,
  },
  {
    label: '메뉴 둘',
    key: '앱',
    icon: <AppstoreOutlined />,
    disabled: true,
  },
  {
    label: '메뉴 셋 - 하위 메뉴',
    key: '하위 메뉴',
    icon: <SettingOutlined />, children: [
      {
        type: 'group',
        label: '항목 1',
        children: [
          { label: '선택지 1', key: 'setting:1' },
          { label: '선택지 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: '항목 2',
        children: [
          { label: '선택지 3', key: 'setting:3' },
          { label: '항목 4', key: 'setting:4' },
        ],
      },
    ],
  },
  {
    key: 'alipay',
    label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        메뉴 넷 - 링크
      </a>
    ),
  },
];

const App: React.FC = () => {
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

export default App;