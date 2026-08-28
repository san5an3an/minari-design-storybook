// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/menu.json 의 examples[8] ("Switch the menu type")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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