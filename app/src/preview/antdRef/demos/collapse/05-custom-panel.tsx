import type { CSSProperties } from 'react';
import React from 'react';
import { CaretRightOutlined } from '../_icons';
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';

const text = `개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.`;

const getItems: (panelStyle: CSSProperties) => CollapseProps['items'] = (panelStyle) => [
  {
    key: '1',
    label: '첫 번째 판 머리예요',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '2',
    label: '두 번째 판 머리예요',
    children: <p>{text}</p>,
    style: panelStyle,
  },
  {
    key: '3',
    label: '세 번째 판 머리예요',
    children: <p>{text}</p>,
    style: panelStyle,
  },
];

const App: React.FC = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: 'none',
  };

  return (
    <Collapse
      bordered={false}
      defaultActiveKey={['1']}
      expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle)}
    />
  );
};

export default App;