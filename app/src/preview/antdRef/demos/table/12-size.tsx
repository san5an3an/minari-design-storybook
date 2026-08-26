import React from 'react';
import { Divider, Table } from 'antd';
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
  },
  {
    title: '나이',
    dataIndex: 'age',
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
    age: 32,
    address: '인천 호수공원 1번지',
  },
  {
    key: '2',
    name: '이서준',
    age: 42,
    address: '서울 호수공원 1번지',
  },
  {
    key: '3',
    name: '박지호',
    age: 32,
    address: '부산 호수공원 1번지',
  },
];

const App: React.FC = () => (
  <>
    <Divider>중간 크기 표</Divider>
    <Table<DataType> columns={columns} dataSource={data} size="medium" />
    <Divider>작은 크기 표</Divider>
    <Table<DataType> columns={columns} dataSource={data} size="small" />
  </>
);

export default App;