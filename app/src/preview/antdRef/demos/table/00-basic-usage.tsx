import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const columns: TableProps<DataType>['columns'] = [
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
    render: (_, { tags }) => (
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

const App: React.FC = () => <Table<DataType> columns={columns} dataSource={data} />;

export default App;