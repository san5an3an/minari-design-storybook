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
  Table.EXPAND_COLUMN,
  { title: '나이', dataIndex: 'age', key: 'age' },
  Table.SELECTION_COLUMN,
  { title: '주소', dataIndex: 'address', key: 'address' },
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
    rowSelection={{}}
    expandable={{
      expandedRowRender: (record) => <p style={{ margin: 0 }}>{record.description}</p>,
    }}
    dataSource={data}
  />
);

export default App;