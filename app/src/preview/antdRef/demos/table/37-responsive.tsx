// @ts-nocheck
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
    title: '이름 (모든 화면)',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '나이 (중간 화면 이상)',
    dataIndex: 'age',
    key: 'age',
    responsive: ['md'],
  },
  {
    title: '주소 (큰 화면 이상)',
    dataIndex: 'address',
    key: 'address',
    responsive: ['lg'],
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    age: 32,
    address: '인천 호수공원 1번지',
  },
];

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;