// @ts-nocheck
import React from 'react';
import { Table, Tooltip } from 'antd';
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
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '긴 열 긴 열 긴 열',
    dataIndex: 'address',
    key: '주소 2',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '긴 열 긴 열',
    dataIndex: 'address',
    key: '주소 3',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
  {
    title: '긴 열',
    dataIndex: 'address',
    key: '주소 4',
    ellipsis: {
      showTitle: false,
    },
    render: (address) => (
      <Tooltip placement="topLeft" title={address}>
        {address}
      </Tooltip>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    age: 32,
    address: '인천 호수공원 1번지, 인천 호수공원 1번지',
  },
  {
    key: '2',
    name: '이서준',
    age: 42,
    address: '서울 호수공원 2번지, 서울 호수공원 2번지',
  },
  {
    key: '3',
    name: '박지호',
    age: 32,
    address: '부산 호수공원 1번지, 부산 호수공원 1번지',
  },
];

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;