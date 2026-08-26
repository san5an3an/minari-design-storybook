import React, { useState } from 'react';
import { Table } from 'antd';
import type { TableColumnsType, TableProps } from 'antd';

type TableRowSelection<T extends object = object> = TableProps<T>['rowSelection'];

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

const dataSource = Array.from({ length: 46 }).map<DataType>((_, i) => ({
  key: i,
  name: `준서 킹 ${i}`,
  age: 32,
  address: `서울 공원로 ${i}`,
}));

const App: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('고른 행 key 가 바뀜: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection: TableRowSelection<DataType> = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: 'odd',
        text: '홀수 행 고르기',
        onSelect: (changeableRowKeys) => {
          setSelectedRowKeys(changeableRowKeys.filter((_, index) => index % 2 === 0));
        },
      },
      {
        key: 'even',
        text: '짝수 행 고르기',
        onSelect: (changeableRowKeys) => {
          setSelectedRowKeys(changeableRowKeys.filter((_, index) => index % 2 !== 0));
        },
      },
    ],
  };

  return <Table<DataType> rowSelection={rowSelection} columns={columns} dataSource={dataSource} />;
};

export default App;