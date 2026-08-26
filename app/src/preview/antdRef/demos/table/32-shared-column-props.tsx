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