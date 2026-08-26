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
    showSorterTooltip: { target: 'full-header' },
    filters: [
      {
        text: '민준',
        value: '민준',
      },
      {
        text: '준서',
        value: '준서',
      },
      {
        text: '하위 메뉴',
        value: '하위 메뉴',
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
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    onFilter: (value, record) => record.name.indexOf(value as string) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
    sortDirections: ['descend'],
  },
  {
    title: '나이',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
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
    onFilter: (value, record) => record.address.indexOf(value as string) === 0,
  },
];

const data = [
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
  <Table<DataType>
    columns={columns}
    dataSource={data}
    onChange={onChange}
    showSorterTooltip={{ target: 'sorter-icon' }}
  />
);

export default App;