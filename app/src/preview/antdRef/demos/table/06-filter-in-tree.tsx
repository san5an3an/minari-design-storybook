import React from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

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
    filters: [
      {
        text: '민준',
        value: '민준',
      },
      {
        text: '분류 1',
        value: '분류 1',
        children: [
          {
            text: '노랑',
            value: '노랑',
          },
          {
            text: '분홍',
            value: '분홍',
          },
        ],
      },
      {
        text: '분류 2',
        value: '분류 2',
        children: [
          {
            text: '초록',
            value: '초록',
          },
          {
            text: '검정',
            value: '검정',
          },
        ],
      },
    ],
    filterMode: 'tree',
    filterSearch: true,
    onFilter: (value, record) => record.name.includes(value as string),
    width: '30%',
  },
  {
    title: '나이',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '주소',
    dataIndex: 'address',
    filters: [
      {
        text: '런던',
        value: '런던',
      },
      {
        text: '뉴욕',
        value: '뉴욕',
      },
    ],
    onFilter: (value, record) => record.address.startsWith(value as string),
    filterSearch: true,
    width: '40%',
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
  {
    key: '4',
    name: '이서윤',
    age: 32,
    address: '서울 호수공원 2번지',
  },
];

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => (
  <Table<DataType> columns={columns} dataSource={data} onChange={onChange} />
);

export default App;