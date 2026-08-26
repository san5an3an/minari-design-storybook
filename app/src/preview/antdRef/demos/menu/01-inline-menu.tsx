/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/menu.json 의 examples[1] ("Inline menu")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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