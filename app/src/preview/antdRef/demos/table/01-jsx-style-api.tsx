import React from 'react';
import { Flex, Space, Table, Tag } from 'antd';

const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
  tags: string[];
}

const data: DataType[] = [
  {
    key: '1',
    firstName: '민준',
    lastName: '갈색',
    age: 32,
    address: '인천 호수공원 1번지',
    tags: ['좋음', '개발자'],
  },
  {
    key: '2',
    firstName: '준서',
    lastName: '초록',
    age: 42,
    address: '서울 호수공원 1번지',
    tags: ['kawaii'],
  },
  {
    key: '3',
    firstName: '민준',
    lastName: '검정',
    age: 32,
    address: '부산 호수공원 1번지',
    tags: ['멋짐', '선생님'],
  },
];

const App: React.FC = () => (
  <Table<DataType> dataSource={data}>
    <ColumnGroup title="이름">
      <Column title="이름" dataIndex="firstName" key="firstName" />
      <Column title="성" dataIndex="lastName" key="lastName" />
    </ColumnGroup>
    <Column title="나이" dataIndex="age" key="age" />
    <Column title="주소" dataIndex="address" key="address" />
    <Column
      title="태그"
      dataIndex="tags"
      key="tags"
      render={(tags: string[]) => (
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
      )}
    />
    <Column
      title="동작"
      key="동작"
      render={(_: any, record: DataType) => (
        <Space size="medium">
          <a>초대 {record.lastName}</a>
          <a>지우기</a>
        </Space>
      )}
    />
  </Table>
);

export default App;