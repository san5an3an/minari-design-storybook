// @ts-nocheck
import React, { useState } from 'react';
import { Checkbox, Divider, Table } from 'antd';
import type { CheckboxOptionType, TableColumnsType } from 'antd';

interface DataType {
  key: React.Key;
  name: string;
  age: number;
  address: string;
}

const columns: TableColumnsType<DataType> = [
  { title: '열 1', dataIndex: 'address', key: '1' },
  { title: '열 2', dataIndex: 'address', key: '2' },
  { title: '열 3', dataIndex: 'address', key: '3' },
  { title: '열 4', dataIndex: 'address', key: '4' },
  { title: '열 5', dataIndex: 'address', key: '5' },
  { title: '열 6', dataIndex: 'address', key: '6' },
  { title: '열 7', dataIndex: 'address', key: '7' },
  { title: '열 8', dataIndex: 'address', key: '8' },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    age: 32,
    address: '인천공원',
  },
  {
    key: '2',
    name: '이서준',
    age: 40,
    address: '서울공원',
  },
];

const defaultCheckedList = columns.map((item) => item.key);

const App: React.FC = () => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);

  const options = columns.map(({ key, title }) => ({
    label: title,
    value: key,
  }));

  const newColumns = columns.map((item) => ({
    ...item,
    hidden: !checkedList.includes(item.key as string),
  }));

  return (
    <>
      <Divider>보이는 열</Divider>
      <Checkbox.Group
        value={checkedList}
        options={options as CheckboxOptionType[]}
        onChange={(value) => {
          setCheckedList(value as string[]);
        }}
      />
      <Table<DataType> columns={newColumns} dataSource={data} style={{ marginTop: 24 }} />
    </>
  );
};

export default App;