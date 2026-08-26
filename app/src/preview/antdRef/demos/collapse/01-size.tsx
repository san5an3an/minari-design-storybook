import React from 'react';
import { Collapse, Divider } from 'antd';

const text = `개는 사람과 함께 살아온 동물이에요. 충직하고 한결같아서 세계 곳곳의 집에서 반가운 식구로 지내요.`;

const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">중간 크기</Divider>
    <Collapse
      items={[{ key: '1', label: '중간 크기 판 머리예요', children: <p>{text}</p> }]}
    />
    <Divider titlePlacement="start">작은 크기</Divider>
    <Collapse
      size="small"
      items={[{ key: '1', label: '작은 크기 판 머리예요', children: <p>{text}</p> }]}
    />
    <Divider titlePlacement="start">큰 크기</Divider>
    <Collapse
      size="large"
      items={[{ key: '1', label: '큰 크기 판 머리예요', children: <p>{text}</p> }]}
    />
  </>
);

export default App;