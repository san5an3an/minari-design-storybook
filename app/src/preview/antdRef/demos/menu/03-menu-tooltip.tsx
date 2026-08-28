// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/menu.json 의 examples[3] ("Menu tooltip")
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
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu, Space, Switch } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
  { key: '1', icon: <PieChartOutlined />, label: '선택지 1' },
  { key: '2', icon: <DesktopOutlined />, label: '선택지 2' },
  { key: '3', icon: <ContainerOutlined />, label: '선택지 3' },
  {
    key: 'sub1',
    label: '메뉴 하나',
    icon: <MailOutlined />, children: [
      { key: '5', label: '항목 5' },
      { key: '6', label: '항목 6' },
      { key: '7', label: '항목 7' },
      { key: '8', label: '항목 8' },
    ],
  },
  {
    key: 'sub2',
    label: '메뉴 둘',
    icon: <AppstoreOutlined />, children: [
      { key: '9', label: '항목 9' },
      { key: '10', label: '항목 10' },
      {
        key: 'sub3',
        label: '하위 메뉴',
        children: [
          { key: '11', label: '항목 11' },
          { key: '12', label: '항목 12' },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [tooltipEnabled, setTooltipEnabled] = useState(true);

  return (
    <div style={{ width: 256 }}>
      <Space style={{ marginBottom: 16 }}>
        <Button
          type="primary"
          onClick={() => setCollapsed((prev) => !prev)}
          icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        />
        <Switch
          checked={tooltipEnabled}
          onChange={setTooltipEnabled}
          checkedChildren="툴팁 켬"
          unCheckedChildren="툴팁 끔"
        />
      </Space>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={collapsed}
        tooltip={tooltipEnabled ? { placement: 'left' } : false}
        items={items}
      />
    </div>
  );
};

export default App;