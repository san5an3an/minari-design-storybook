import React, { useState } from 'react';
import { Button, Descriptions, Radio } from 'antd';
import type { DescriptionsProps, RadioChangeEvent } from 'antd';

const borderedItems: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '상품',
    children: '클라우드 데이터베이스',
  },
  {
    key: '2',
    label: '청구',
    children: '선결제',
  },
  {
    key: '3',
    label: '시각',
    children: '18:00:00',
  },
  {
    key: '4',
    label: '금액',
    children: '$80.00',
  },
  {
    key: '5',
    label: '할인',
    children: '$20.00',
  },
  {
    key: '6',
    label: '공식',
    children: '$60.00',
  },
  {
    key: '7',
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

const items: DescriptionsProps['items'] = [
  {
    key: '1',
    label: '상품',
    children: '클라우드 데이터베이스',
  },
  {
    key: '2',
    label: '청구',
    children: '선결제',
  },
  {
    key: '3',
    label: '시각',
    children: '18:00:00',
  },
  {
    key: '4',
    label: '금액',
    children: '$80.00',
  },
  {
    key: '5',
    label: '할인',
    children: '$20.00',
  },
  {
    key: '6',
    label: '공식',
    children: '$60.00',
  },
];

const App: React.FC = () => {
  const [size, setSize] = useState<'large' | 'medium' | 'small'>('large');

  const onChange = (e: RadioChangeEvent) => {
    console.log('크기 골랐어요', e.target.value);
    setSize(e.target.value);
  };

  return (
    <div>
      <Radio.Group onChange={onChange} value={size}>
        <Radio value="large">large</Radio>
        <Radio value="medium">medium</Radio>
        <Radio value="small">small</Radio>
      </Radio.Group>
      <br />
      <br />
      <Descriptions
        bordered
        title="직접 정한 크기"
        size={size}
        extra={<Button type="primary">고치기</Button>}
        items={borderedItems}
      />
      <br />
      <br />
      <Descriptions
        title="직접 정한 크기"
        size={size}
        extra={<Button type="primary">고치기</Button>}
        items={items}
      />
    </div>
  );
};

export default App;