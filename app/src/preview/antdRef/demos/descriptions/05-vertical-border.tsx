import React from 'react';
import { Badge, Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '상품',
    children: '클라우드 데이터베이스',
  },
  {
    key: '2',
    label: '청구 방식',
    children: '선결제',
  },
  {
    key: '3',
    label: '자동 갱신',
    children: '네',
  },
  {
    key: '4',
    label: '주문 시각',
    children: '2018-04-24 18:00:00',
  },
  {
    key: '5',
    label: '쓴 시간',
    span: 2,
    children: '2019-04-24 18:00:00',
  },
  {
    key: '6',
    label: '상태',
    span: 3,
    children: <Badge status="processing" text="도는 중" />,
  },
  {
    key: '7',
    label: '협의 금액',
    children: '$80.00',
  },
  {
    key: '8',
    label: '할인',
    children: '$20.00',
  },
  {
    key: '9',
    label: '공식 영수증',
    children: '$60.00',
  },
  {
    key: '10',
    label: '설정 정보',
    children: (
      <>
        데이터 디스크 종류: MongoDB
        <br />
        데이터베이스 버전: 3.4
        <br />
        패키지: dds.mongo.mid
        <br />
        저장 공간: 10 GB
        <br />
        복제 수: 3
        <br />
        지역: East China 1
        <br />
      </>
    ),
  },
];

const App: React.FC = () => (
  <Descriptions title="사용자 정보" layout="vertical" bordered items={items} />
);

export default App;