// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[14] ("Expandable Row")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
  description: string;
}

const columns: TableColumnsType<DataType> = [
  { title: '이름', dataIndex: 'name', key: 'name' },
  { title: '나이', dataIndex: 'age', key: 'age' },
  { title: '주소', dataIndex: 'address', key: 'address' },
  {
    title: '동작',
    dataIndex: '',
    key: 'x',
    render: () => <a>지우기</a>,
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: '김민준',
    age: 32,
    address: '인천 호수공원 1번지',
    description: '제 이름은 김민준이고 서른둘이에요. 인천 호수공원 1번지에 살아요.',
  },
  {
    key: 2,
    name: '이서준',
    age: 42,
    address: '서울 호수공원 1번지',
    description: '제 이름은 이서준이고 마흔둘이에요. 서울 호수공원 1번지에 살아요.',
  },
  {
    key: 3,
    name: '못 펼침',
    age: 29,
    address: '경기 호수공원 1번지',
    description: '이건 못 펼쳐요',
  },
  {
    key: 4,
    name: '박지호',
    age: 32,
    address: '부산 호수공원 1번지',
    description: '제 이름은 박지호이고 서른둘이에요. 부산 호수공원 1번지에 살아요.',
  },
];

const App: React.FC = () => (
  <Table<DataType>
    columns={columns}
    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
      rowExpandable: (record) => record.name !== '못 펼침',
    }}
    dataSource={data}
  />
);

export default App;