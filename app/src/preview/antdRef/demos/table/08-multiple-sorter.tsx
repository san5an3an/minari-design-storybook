// @ts-nocheck
import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: number;
}

const columns: TableColumnsType<DataType> = [
  {
    title: '이름',
    dataIndex: 'name',
  },
  {
    title: '국어 점수',
    dataIndex: 'chinese',
    sorter: {
      compare: (a, b) => a.chinese - b.chinese,
      multiple: 3,
    },
  },
  {
    title: '수학 점수',
    dataIndex: 'math',
    sorter: {
      compare: (a, b) => a.math - b.math,
      multiple: 2,
    },
  },
  {
    title: '영어 점수',
    dataIndex: 'english',
    sorter: {
      compare: (a, b) => a.english - b.english,
      multiple: 1,
    },
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    chinese: 98,
    math: 60,
    english: 70,
  },
  {
    key: '2',
    name: '이서준',
    chinese: 98,
    math: 66,
    english: 89,
  },
  {
    key: '3',
    name: '박지호',
    chinese: 98,
    math: 90,
    english: 70,
  },
  {
    key: '4',
    name: '이서윤',
    chinese: 88,
    math: 99,
    english: 89,
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
);

export default App;