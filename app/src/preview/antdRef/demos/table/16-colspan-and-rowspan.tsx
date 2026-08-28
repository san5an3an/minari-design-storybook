// @ts-nocheck
import React from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  tel: string;
  phone: number;
  address: string;
}

// In the fifth row, other columns are merged into first column
// by setting it's colSpan to be 0
const sharedOnCell = (_: DataType, index?: number) => {
  if (index === 1) {
    return { colSpan: 0 };
  }

  return {};
};

const columns: TableProps<DataType>['columns'] = [
  {
    title: '행 머리',
    dataIndex: 'key',
    rowScope: 'row',
  },
  {
    title: '이름',
    dataIndex: 'name',
    render: (text) => <a>{text}</a>,
    onCell: (_, index) => ({
      colSpan: index === 1 ? 5 : 1,
    }),
  },
  {
    title: '나이',
    dataIndex: 'age',
    onCell: sharedOnCell,
  },
  {
    title: '집 전화',
    colSpan: 2,
    dataIndex: 'tel',
    onCell: (_, index) => {
      if (index === 3) {
        return { rowSpan: 2 };
      }
      // These two are merged into above cell
      if (index === 4) {
        return { rowSpan: 0 };
      }
      if (index === 1) {
        return { colSpan: 0 };
      }

      return {};
    },
  },
  {
    title: '전화',
    colSpan: 0,
    dataIndex: 'phone',
    onCell: sharedOnCell,
  },
  {
    title: '주소',
    dataIndex: 'address',
    onCell: sharedOnCell,
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    age: 32,
    tel: '0571-22098909',
    phone: 18889898989,
    address: '인천 호수공원 1번지',
  },
  {
    key: '2',
    name: '이서준',
    tel: '0571-22098333',
    phone: 18889898888,
    age: 42,
    address: '서울 호수공원 1번지',
  },
  {
    key: '3',
    name: '박지호',
    age: 32,
    tel: '0575-22098909',
    phone: 18900010002,
    address: '부산 호수공원 1번지',
  },
  {
    key: '4',
    name: '이서윤',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: '서울 호수공원 2번지',
  },
  {
    key: '5',
    name: '백지호',
    age: 18,
    tel: '0575-22098909',
    phone: 18900010002,
    address: '인천 호수공원 2번지',
  },
];

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} bordered />;

export default App;