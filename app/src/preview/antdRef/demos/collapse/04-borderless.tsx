// @ts-nocheck
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = (
  <p style={{ paddingInlineStart: 24 }}>
    개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.
  </p>
);

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '첫 번째 판 머리예요',
    children: text,
  },
  {
    key: '2',
    label: '두 번째 판 머리예요',
    children: text,
  },
  {
    key: '3',
    label: '세 번째 판 머리예요',
    children: text,
  },
];

const App: React.FC = () => <Collapse items={items} bordered={false} defaultActiveKey={['1']} />;

export default App;