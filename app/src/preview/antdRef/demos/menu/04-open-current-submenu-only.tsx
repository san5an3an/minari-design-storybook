// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/menu.json 의 examples[4] ("Open current submenu only")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  {
    key: '1',
    icon: <MailOutlined />,
    label: '메뉴 하나',
    children: [
      { key: '11', label: '선택지 1' },
      { key: '12', label: '선택지 2' },
      { key: '13', label: '선택지 3' },
      { key: '14', label: '항목 4' },
    ],
  },
  {
    key: '2',
    icon: <AppstoreOutlined />,
    label: '메뉴 둘',
    children: [
      { key: '21', label: '선택지 1' },
      { key: '22', label: '선택지 2' },
      {
        key: '23',
        label: '하위 메뉴',
        children: [
          { key: '231', label: '선택지 1' },
          { key: '232', label: '선택지 2' },
          { key: '233', label: '선택지 3' },
        ],
      },
      {
        key: '24',
        label: '하위 메뉴 2',
        children: [
          { key: '241', label: '선택지 1' },
          { key: '242', label: '선택지 2' },
          { key: '243', label: '선택지 3' },
        ],
      },
    ],
  },
  {
    key: '3',
    icon: <SettingOutlined />,
    label: '메뉴 셋',
    children: [
      { key: '31', label: '선택지 1' },
      { key: '32', label: '선택지 2' },
      { key: '33', label: '선택지 3' },
      { key: '34', label: '항목 4' },
    ],
  },
];

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

const App: React.FC = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => !stateOpenKeys.includes(key));
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['231']}
      openKeys={stateOpenKeys}
      onOpenChange={onOpenChange}
      style={{ width: 256 }}
      items={items}
    />
  );
};

export default App;