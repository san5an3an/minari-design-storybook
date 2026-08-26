import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '../_icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: 'sub1',
    label: '메뉴 하나',
    icon: <MailOutlined />, children: [
      { key: '1', label: '항목 1' },
      { key: '2', label: '항목 2' },
      { key: '3', label: '항목 3' },
      { key: '4', label: '항목 4' },
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

const App: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return (
    <>
      <Switch
        checked={theme === 'dark'}
        onChange={changeTheme}
        checkedChildren="다크"
        unCheckedChildren="라이트"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={onClick}
        style={{ width: 256 }}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
        mode="inline"
        items={items}
      />
    </>
  );
};

export default App;