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