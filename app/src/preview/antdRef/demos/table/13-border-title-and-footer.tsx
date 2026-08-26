/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[13] ("border, title and footer")
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
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  money: string;
  address: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '이름',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '현금 자산',
    className: 'column-money',
    dataIndex: 'money',
    align: 'right',
  },
  {
    title: '주소',
    dataIndex: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    money: '￥300,000.00',
    address: '인천 호수공원 1번지',
  },
  {
    key: '2',
    name: '이서준',
    money: '￥1,256,000.00',
    address: '서울 호수공원 1번지',
  },
  {
    key: '3',
    name: '박지호',
    money: '￥120,000.00',
    address: '부산 호수공원 1번지',
  },
];

const App: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={data}
    bordered
    title={() => '머리'}
    footer={() => '바닥'}
  />
);

export default App;