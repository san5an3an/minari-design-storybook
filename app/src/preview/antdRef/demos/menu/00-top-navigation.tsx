/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/menu.json 의 examples[0] ("Top Navigation")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '../_icons';
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
          { label: '항목 1', key: 'setting:1' },
          { label: '항목 2', key: 'setting:2' },
        ],
      },
      {
        type: 'group',
        label: '항목 2',
        children: [
          { label: '항목 3', key: 'setting:3' },
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