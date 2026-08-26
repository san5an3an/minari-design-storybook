import React, { useState } from 'react';
import { MailOutlined } from '../_icons';
import type { MenuProps, MenuTheme } from 'antd';
import { Menu, Switch } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const App: React.FC = () => {
  const [menuTheme, setMenuTheme] = useState<MenuTheme>('light');
  const [current, setCurrent] = useState('1');

  const changeTheme = (value: boolean) => {
    setMenuTheme(value ? 'dark' : 'light');
  };

  const onClick: MenuProps['onClick'] = (e) => {
    setCurrent(e.key);
  };

  const items: MenuItem[] = [
    {
      key: 'sub1',
      icon: <MailOutlined />,
      label: '메뉴 하나',
      theme: menuTheme,
      children: [
        { key: '1', label: '항목 1' },
        { key: '2', label: '항목 2' },
        { key: '3', label: '항목 3' },
      ],
    },
    { key: '5', label: '항목 5' },
    { key: '6', label: '항목 6' },
  ];

  return (
    <>
      <Switch
        checked={menuTheme === 'dark'}
        onChange={changeTheme}
        checkedChildren="다크"
        unCheckedChildren="라이트"
      />
      <br />
      <br />
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        openKeys={['sub1']}
        selectedKeys={[current]}
        mode="vertical"
        theme="dark"
        items={items}
        getPopupContainer={(node) => node.parentNode as HTMLElement}
      />
    </>
  );
};

export default App;