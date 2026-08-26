import React, { useState } from 'react';
import { Flex, Radio, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

type ColumnsType<T extends object> = TableProps<T>['columns'];
type TablePagination<T extends object> = NonNullable<Exclude<TableProps<T>['pagination'], boolean>>;
type TablePaginationPlacement<T extends object> = NonNullable<
  TablePagination<T>['placement']
>[number];

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const topOptions = [
  { label: 'topStart', value: 'topStart' },
  { label: 'topCenter', value: 'topCenter' },
  { label: 'topEnd', value: 'topEnd' },
  { label: 'none', value: 'none' },
];

const bottomOptions = [
  { label: 'bottomStart', value: 'bottomStart' },
  { label: 'bottomCenter', value: 'bottomCenter' },
  { label: 'bottomEnd', value: 'bottomEnd' },
  { label: 'none', value: 'none' },
];

const columns: ColumnsType<DataType> = [
  {
    title: '이름',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: '나이',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: '주소',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: '태그',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags: string[]) => (
      <Flex gap="small" align="center" wrap>
        {tags.map((tag) => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'kawaii') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </Flex>
    ),
  },
  {
    title: '동작',
    key: '동작',
    render: (_, record) => (
      <Space size="medium">
        <a>초대 {record.name}</a>
        <a>지우기</a>
      </Space>
    ),
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: '김민준',
    age: 32,
    address: '인천 호수공원 1번지',
    tags: ['좋음', '개발자'],
  },
  {
    key: '2',
    name: '이서준',
    age: 42,
    address: '서울 호수공원 1번지',
    tags: ['kawaii'],
  },
  {
    key: '3',
    name: '박지호',
    age: 32,
    address: '부산 호수공원 1번지',
    tags: ['멋짐', '선생님'],
  },
];

const App: React.FC = () => {
  const [top, setTop] = useState<TablePaginationPlacement<DataType>>('topStart');
  const [bottom, setBottom] = useState<TablePaginationPlacement<DataType>>('bottomEnd');
  return (
    <div>
      <div>
        <Radio.Group
          style={{ marginBottom: 10 }}
          options={topOptions}
          value={top}
          onChange={(e) => {
            setTop(e.target.value);
          }}
        />
      </div>
      <Radio.Group
        style={{ marginBottom: 10 }}
        options={bottomOptions}
        value={bottom}
        onChange={(e) => {
          setBottom(e.target.value);
        }}
      />
      <Table<DataType>
        columns={columns}
        pagination={{ placement: [top, bottom] }}
        dataSource={data}
      />
    </div>
  );
};

export default App;