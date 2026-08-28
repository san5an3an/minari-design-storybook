// @ts-nocheck
import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

const text = `개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: '첫 번째 판 머리예요',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: '두 번째 판 머리예요',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: '세 번째 판 머리예요',
    children: <p>{text}</p>,
  },
];

const App: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

export default App;