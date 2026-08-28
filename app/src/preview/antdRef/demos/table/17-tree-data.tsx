// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[17] ("Tree data")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React, { useState } from 'react';
import { Space, Switch, Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

interface DataType {
  key: React.ReactNode;
  name: string;
  age: number;
  address: string;
  children?: DataType[];
}

const columns: TableColumnsType<DataType> = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '나이',
    dataIndex: 'age',
    key: 'age',
    width: '12%',
  },
  {
    title: '주소',
    dataIndex: 'address',
    width: '30%',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: 1,
    name: '김민준 시니어',
    age: 60,
    address: '인천 호수공원 1번지',
    children: [
      {
        key: 11,
        name: '김민준',
        age: 42,
        address: '인천 호수공원 2번지',
      },
      {
        key: 12,
        name: '김민준 주니어',
        age: 30,
        address: '인천 호수공원 3번지',
        children: [
          {
            key: 121,
            name: '김서준',
            age: 16,
            address: '인천 호수공원 3번지',
          },
        ],
      },
      {
        key: 13,
        name: '이서준 시니어',
        age: 72,
        address: '서울 호수공원 1번지',
        children: [
          {
            key: 131,
            name: '이서준',
            age: 42,
            address: '서울 호수공원 2번지',
            children: [
              {
                key: 1311,
                name: '이서준 주니어',
                age: 25,
                address: '서울 호수공원 3번지',
              },
              {
                key: 1312,
                name: '김서준 시니어',
                age: 18,
                address: '서울 호수공원 4번지',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    key: 2,
    name: '박지호',
    age: 32,
    address: '부산 호수공원 1번지',
  },
];

// rowSelection objects indicates the need for row selection
const rowSelection: TableRowSelection<DataType> = {
  onChange: (selectedRowKeys, selectedRows, info) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      '고른 행: ',
      selectedRows,
      'info',
      info,
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
};

const App: React.FC = () => {
  const [checkStrictly, setCheckStrictly] = useState(false);

  return (
    <>
      <Space align="center" style={{ marginBottom: 16 }}>
        CheckStrictly: <Switch checked={checkStrictly} onChange={setCheckStrictly} />
      </Space>
      <Table<DataType>
        columns={columns}
        rowSelection={{ ...rowSelection, checkStrictly }}
        dataSource={data}
      />
    </>
  );
};

export default App;