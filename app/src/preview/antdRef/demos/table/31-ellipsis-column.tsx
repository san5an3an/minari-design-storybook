// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[31] ("ellipsis column")
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
}

const columns: TableColumnsType<DataType> = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
    width: 150,
  },
  {
    title: '나이',
    dataIndex: 'age',
    key: 'age',
    width: 80,
  },
  {
    title: '주소',
    dataIndex: 'address',
    key: '주소 1',
    ellipsis: true,
  },
  {
    title: '긴 열 긴 열 긴 열',
    dataIndex: 'address',
    key: '주소 2',
    ellipsis: true,
  },
  {
    title: '긴 열 긴 열',
    dataIndex: 'address',
    key: '주소 3',
    ellipsis: true,
  },
  {
    title: '긴 열',
    dataIndex: 'address',
    key: '주소 4',
    ellipsis: true,
  },
];

const data = [
  {
    key: '1',
    name: '김민준',
    age: 32,
    address: '인천 호수공원 1번지, 인천 호수공원 1번지',
    tags: ['좋음', '개발자'],
  },
  {
    key: '2',
    name: '이서준',
    age: 42,
    address: '서울 호수공원 2번지, 서울 호수공원 2번지',
    tags: ['kawaii'],
  },
  {
    key: '3',
    name: '박지호',
    age: 32,
    address: '부산 호수공원 1번지, 부산 호수공원 1번지',
    tags: ['멋짐', '선생님'],
  },
];

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;