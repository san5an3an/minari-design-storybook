import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    label: '상품',
    children: '클라우드 데이터베이스',
  },
  {
    label: '청구',
    children: '선결제',
  },
  {
    label: '시각',
    children: '18:00:00',
  },
  {
    label: '금액',
    children: '$80.00',
  },
  {
    label: '할인',
    span: { xl: 2, xxl: 2 },
    children: '$20.00',
  },
  {
    label: '공식',
    span: { xl: 2, xxl: 2 },
    children: '$60.00',
  },
  {
    label: '설정 정보',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        데이터 디스크 종류: MongoDB
        <br />
        데이터베이스 버전: 3.4
        <br />
        패키지: dds.mongo.mid
      </>
    ),
  },
  {
    label: '하드웨어 정보',
    span: { xs: 1, sm: 2, md: 3, lg: 3, xl: 2, xxl: 2 },
    children: (
      <>
        CPU: 6코어 3.5GHz
        <br />
        저장 공간: 10 GB
        <br />
        복제 수: 3
        <br />
        지역: East China 1
      </>
    ),
  },
];

const App: React.FC = () => (
  <Descriptions
    title="반응형 Descriptions"
    bordered
    column={{ xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
    items={items}
  />
);

export default App;