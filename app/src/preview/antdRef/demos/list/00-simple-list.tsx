import React from 'react';
import { Divider, List, Typography } from 'antd';

const data = [
  '경주차가 불붙은 연료를 관중에게 뿌렸어요.',
  '일본 공주가 평민과 결혼해요.',
  '호주에서 사고 뒤 100km 를 걸어 나왔어요.',
  '결혼식에서 사라진 아이 사건으로 남성이 기소됐어요.',
  '로스앤젤레스가 큰 산불과 싸워요.',
];

const App: React.FC = () => (
  <>
    <Divider titlePlacement="start">기본 크기</Divider>
    <List
      header={<div>머리</div>}
      footer={<div>바닥</div>}
      bordered dataSource={data}
      renderItem={(item) => (
        <List.Item>
          <Typography.Text mark>[ITEM]</Typography.Text> {item}
        </List.Item>
      )}
    />
    <Divider titlePlacement="start">작은 크기</Divider>
    <List
      size="small"
      header={<div>머리</div>}
      footer={<div>바닥</div>}
      bordered dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
    <Divider titlePlacement="start">큰 크기</Divider>
    <List
      size="large"
      header={<div>머리</div>}
      footer={<div>바닥</div>}
      bordered dataSource={data}
      renderItem={(item) => <List.Item>{item}</List.Item>}
    />
  </>
);

export default App;