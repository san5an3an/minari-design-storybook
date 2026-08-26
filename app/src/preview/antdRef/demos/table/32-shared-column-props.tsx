/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[32] ("Shared column props")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import type { TableProps } from 'antd';
import { Table } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  address: string;
  description: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '이름',
    dataIndex: 'name',
    width: 140,
  },
  {
    title: '설명',
    dataIndex: 'description',
    width: 180,
  },
  {
    title: '주소',
    dataIndex: 'address',
    align: 'left',
    width: 220,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    description: '공통 열 prop 을 쓰면 되풀이되는 열 설정을 표에 모아 둘 수 있어요.',
    address: '서울 강남구 호수공원로 1',
  },
  {
    key: '2',
    name: '이서준',
    description: '열마다 기본 정렬이나 공통 prop 을 따로 덮을 수도 있어요.',
    address: '서울 송파구 정원대로 99',
  },
];

const App: React.FC = () => (
  <Table<DataType>
    columns={columns}
    dataSource={data}
    column={{ align: 'center', ellipsis: true }}
    pagination={false}
  />
);

export default App;