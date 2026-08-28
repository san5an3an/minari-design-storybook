// @ts-nocheck
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '사용자 이름',
    children: '김민준',
  },
  {
    key: '2',
    label: '전화',
    children: '1810000000',
  },
  {
    key: '3',
    label: '실시간',
    children: '서울 강남구',
  },
  {
    key: '4',
    label: '주소',
    span: 2,
    children: '서울 강남구 테헤란로 18',
  },
  {
    key: '5',
    label: '비고',
    children: '비어 있음',
  },
];

const App: React.FC = () => <Descriptions title="사용자 정보" layout="vertical" items={items} />;

export default App;