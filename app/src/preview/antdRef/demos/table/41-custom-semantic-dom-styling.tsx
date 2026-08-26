/* 자동 생성 — tools/gen_antd_demos.py. 손으로 고치지 말 것.
 *
 * 출처: app/src/preview/antdRef/table.json 의 examples[41] ("Custom semantic dom styling")
 * 그 파일은 tools/fetch_antd_reference.py 가 공식 문서에서 받아 온 것이다.
 *
 * ⚠️ 본문은 공식 원본에서 **두 가지만** 바꾼 것이다 —
 *    ① 아이콘: `@ant-design/icons` → `../_icons`(Lucide). 이름은 그대로다.
 *    ② 화면에 보이는 영어 문구 → 한글 (`tools/antd_demo_ko.py` 의 사전).
 *       사전에 없는 문자열은 손대지 않는다. API 값은 사전에 안 넣는다.
 * ⚠️ 고칠 일이 생기면 여기가 아니라 생성기나 _overrides/ 를 고친다.
 */
import React from 'react';
import { Flex, Table } from 'antd';
import type { GetProp, TableProps } from 'antd';
import { createStaticStyles } from 'antd-style';

const classNames = createStaticStyles(({ css }) => ({
  root: css`
    color: #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  `,
}));

interface DataType {
  key?: string;
  name?: string;
  age?: number;
  address?: string;
  description?: string;
}

const columns: TableProps<DataType>['columns'] = [
  { title: '이름', dataIndex: 'name', key: 'name' },
  { title: '나이', dataIndex: 'age', key: 'age' },
  { title: '주소', dataIndex: 'address', key: 'address' },
  { title: '설명', dataIndex: 'description', key: 'description' },
];

const dataSource: DataType[] = [
  {
    key: '1',
    name: '김민준',
    age: 32,
    address: '인천 호수공원 1번지',
    description: '제 이름은 김민준이고 서른둘이에요. 인천 호수공원 1번지에 살아요.',
  },
  {
    key: '2',
    name: '이서준',
    age: 42,
    address: '서울 호수공원 1번지',
    description: '제 이름은 이서준이고 마흔둘이에요. 서울 호수공원 1번지에 살아요.',
  },
  {
    key: '3',
    name: '박지호',
    age: 32,
    address: '부산 호수공원 1번지',
    description: '제 이름은 박지호이고 서른둘이에요. 부산 호수공원 1번지에 살아요.',
  },
  {
    key: '4',
    name: '못 쓰는 사용자',
    age: 99,
    address: '부산 호수공원 2번지',
    description: '이 사용자는 못 써요.',
  },
];

const styles: TableProps<DataType>['styles'] = {
  root: {
    padding: 10,
    borderRadius: 8,
  },
  pagination: {
    root: {
      padding: 10,
    },
  },
  body: {
    row: {
      outline: '1px dashed rgba(226, 225, 225, 0.1)',
    },
    cell: {
      outline: '1px dashed rgba(226, 225, 225, 0.1)',
    },
  },
};

const stylesFn: TableProps<DataType>['styles'] = ( info, ): GetProp<TableProps<DataType>, 'styles', 'Return'> => {
  if (info?.props?.size === 'medium') {
    return {
      root: {
        color: '#e0e0e0',
        borderRadius: 8,
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
      },
      title: {
        backgroundImage: 'linear-gradient(90deg, #6a5acd, #836fff)',
        color: '#fff',
        fontSize: '1.25rem',
        fontWeight: 600,
        padding: '12px 16px',
      },
      footer: {
        color: '#9ca3af',
      },
      header: {
        cell: {
          fontWeight: 600,
          fontSize: '0.95rem',
          color: '#b8bdfd',
          padding: '12px 16px',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        },
      },
      pagination: {
        root: {
          padding: 10,
        },
        item: {
          color: '#b8bdfd',
        },
      },
    };
  }
  return {};
};

const App: React.FC = () => {
  const sharedProps: TableProps<DataType> = {
    columns,
    dataSource,
    classNames,
    pagination: { pageSize: 3, simple: true },
  };

  return (
    <Flex vertical gap="medium">
      <Table<DataType>
        {...sharedProps}
        styles={styles}
        title={() => '표 객체 스타일'}
        footer={() => '표 객체 바닥'}
        size="small"
        virtual
        scroll={{ y: 300 }}
      />
      <Table<DataType>
        {...sharedProps}
        styles={stylesFn}
        title={() => '표 함수 스타일'}
        footer={() => '표 함수 스타일'}
        size="medium"
      />
    </Flex>
  );
};

export default App;