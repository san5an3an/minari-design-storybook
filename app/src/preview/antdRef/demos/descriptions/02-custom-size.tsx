// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/descriptions.json 의 examples[2] ("Custom size")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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