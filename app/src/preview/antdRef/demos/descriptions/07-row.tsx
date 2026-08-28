// @ts-nocheck
import React from 'react';
import { Descriptions } from 'antd';
import type { DescriptionsProps } from 'antd';

const items: DescriptionsProps['items'] = [
  {
    label: '사용자 이름',
    children: '김민준',
  },
  {
    label: '실시간',
    span: 'filled', // span = 2
    children: '서울 강남구',
  },
  {
    label: '비고',
    span: 'filled', // span = 3
    children: '비어 있음',
  },
  {
    label: '주소',
    span: 1, // span will be 3 and warning for span is not align to the end
    children: '서울 강남구 테헤란로 18',
  },
];

const App: React.FC = () => <Descriptions bordered title="사용자 정보" items={items} />;

export default App;