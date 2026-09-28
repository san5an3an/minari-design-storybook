// @ts-nocheck — 아래는 antd 공식 예제 원본이다. 위 주석 참고.
/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[1] ("JSX style API")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
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
    firstName: '준호',
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
      <Column title="이름(성 빼고)" dataIndex="firstName" key="firstName" />
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