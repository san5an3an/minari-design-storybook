// @ts-nocheck
import React, { useState } from 'react';
import {
  AppstoreOutlined,
  CalendarOutlined,
  LinkOutlined,
  MailOutlined,
  SettingOutlined,
} from '@ant-design/icons';
import { Divider, Menu, Switch } from 'antd';
import type { GetProp, MenuProps } from 'antd';

type MenuTheme = GetProp<MenuProps, 'theme'>;

type MenuItem = GetProp<MenuProps, 'items'>[number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: '메뉴 하나',
  },
  {
    key: '2',
    icon: <CalendarOutlined />,
    label: '메뉴 둘',
  },
  {
    key: 'sub1',
    label: '메뉴 둘',
    icon: <AppstoreOutlined />, children: [
      { key: '3', label: '선택지 3' },
      { key: '4', label: '항목 4' },
      {
        key: 'sub1-2',
        label: '하위 메뉴',
        children: [
          { key: '5', label: '항목 5' },
          { key: '6', label: '항목 6' },
        ],
      },
    ],
  },
  {
    key: 'sub2',
    label: '메뉴 셋',
    icon: <SettingOutlined />, children: [
      { key: '7', label: '항목 7' },
      { key: '8', label: '항목 8' },
      { key: '9', label: '항목 9' },
      { key: '10', label: '항목 10' },
    ],
  },
  {
    key: 'link',
    icon: <LinkOutlined />, label: (
      <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
        Ant Design
      </a>
    ),
  },
];

const App: React.FC = () => {
  const [mode, setMode] = useState<'vertical' | 'inline'>('inline');
  const [theme, setTheme] = useState<MenuTheme>('light');

  const changeMode = (value: boolean) => {
    setMode(value ? 'vertical' : 'inline');
  };

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  return (
    <>
      <Switch onChange={changeMode} /> 모드 바꾸기
      <Divider vertical />
      <Switch onChange={changeTheme} /> 스타일 바꾸기
      <br />
      <br />
      <Menu
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode={mode}
        theme={theme}
        items={items}
      />
    </>
  );
};

export default App;